import dotenv from 'dotenv';
dotenv.config({ path: '/.secrets/.env' });

import { Storage } from '@google-cloud/storage';



export async function GET(req) {
  const tokenUrl = 'https://oauth.battle.net/token';
  const apiUrl = 'https://us.api.blizzard.com/sc2/ladder/grandmaster/1?region=us';

  const storage = new Storage();
  const bucketName = process.env.BLIZZARD_SC2_GM_BUCKET_NAME;



  try {

    // Verify the presence of the BLIZZ_BLATT_KEY in the request header
    const requestKey = req.headers.get('BLIZZ_BLATT_KEY'); // Fetch key from headers
    if (!requestKey || requestKey !== process.env.BLIZZ_BLATT_KEY) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized: Missing or invalid request 1' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }


    // Fetch the OAuth token
    const tokenResponse = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${process.env.BLIZZARD_API_CLIENT_ID}:${process.env.BLIZZ_ARD_API_CLIENT_SECRET}`).toString('base64')}`,
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