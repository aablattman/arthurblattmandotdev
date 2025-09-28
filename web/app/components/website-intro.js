import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export const mono = { fontFamily: 'var(--font-mono)' };

export default function Hero() {
  return (
    <Box className="hero-wrap">
      <Typography component="h1" className="hero-title" sx={mono}>
        Principal Engineer — End-to-End Systems
      </Typography>
      <Typography className="hero-sub" sx={mono}>
        I design and ship event-driven platforms and customer-facing apps. Recent:
        an in-house loyalty platform with real-time POS checkout integration,
        an automated challenge app adopted by 4,000+ users in month one,
        and a GCP data platform that cut infra cost ~40%.
      </Typography>
      <Stack direction="row" spacing={2} className="hero-cta">
        <Link href="/ABlattman_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="outlined" sx={mono}>Resume (PDF)</Button>
        </Link>
        <Link href="https://www.linkedin.com/in/arthur-blattman-b40226221/" target="_blank" rel="noopener noreferrer">
          <Button variant="text" sx={mono}>LinkedIn</Button>
        </Link>
      </Stack>
    </Box>
  );
}