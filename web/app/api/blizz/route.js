import { Storage } from '@google-cloud/storage';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';



export async function GET(req) {
  const tokenUrl = 'https://oauth.battle.net/token';
  const apiUrl = 'https://us.api.blizzard.com/sc2/ladder/grandmaster/1?region=us';

  const client = new SecretManagerServiceClient();
  const secretName = process.env.BLIZZARD_SECRET_PATH;

  const storage = new Storage();
  const bucketName = process.env.BLIZZARD_SC2_GM_BUCKET_NAME


  try {

    // Get secrets from GSM
    const [secretResponse] = await client.accessSecretVersion({
      name: secretName
    });
    const secretPayload = secretResponse.payload.data.toString('utf8');
    const { client_id: clientId, client_secret: clientSecret } = JSON.parse(secretPayload);


    // Fetch the OAuth token
    const tokenResponse = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    if (!tokenResponse.ok) {
      throw new Error(`Failed to fetch OAuth token: ${tokenResponse.statusText}`);
    }


    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Fetch grandmaster ladder data
    const apiResponse = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!apiResponse.ok) {
      throw new Error(`Failed to fetch Blizzard API: ${apiResponse.statusText}`);
    }


    const apiData = await apiResponse.json();
    const jsonData = JSON.stringify(apiData);
    const fileName = `grandmaster-ladder-${Date.now()}.json`;

    // Upload to GCS
    const bucket = storage.bucket(bucketName);
    const file = bucket.file(fileName);

    await file.save(jsonData, {
      contentType: 'application/json',
      gzip: true,
    });

    return new Response(
      JSON.stringify({ message: 'Data fetched and stored in GCS successfully', fileName }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {

    console.error(error);

    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );

  }
}