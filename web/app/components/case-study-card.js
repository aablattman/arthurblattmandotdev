import { Roboto_Mono } from "next/font/google";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export const mono = { fontFamily: 'var(--font-mono)' };

export default function CaseStudyCard({ title, blurb, stack, href }) {
  return (
    <Box className="card">
      <Typography variant="h6" className="card-title" sx={mono}>{title}</Typography>
      <Typography className="card-blurb" sx={mono}>{blurb}</Typography>
      {stack && <Typography className="card-stack" sx={mono}>{stack}</Typography>}
      {href && (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <Button size="small" className="card-link" sx={mono}>View project →</Button>
        </Link>
      )}
    </Box>
  );
}
