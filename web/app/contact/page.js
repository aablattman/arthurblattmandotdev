"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Container,
  Box,
  Stack,
  Typography,
  Button,
  Chip,
  Divider,
  Snackbar,
  Alert,
  Tooltip,
} from "@mui/material";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import DownloadIcon from "@mui/icons-material/Download";

export default function ContactPage() {
  // ✏️ Update these to your real links/files
  const email = "hello@example.com";                 // your inbox
  const linkedin = "https://www.linkedin.com/in/your-handle";
  const github = "https://github.com/your-handle";
  const resumeUrl = "/Arthur-Blattman-Resume.pdf";   // place file in /public
  const vcardUrl  = "/Arthur-Blattman.vcf";          // place file in /public

  const [copied, setCopied] = useState(null);

  const copy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
    } finally {
      setCopied(label);
    }
  };

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent("Hello Arthur")}`;

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box
        sx={{
          borderRadius: 2,
          border: "1px solid",
          borderColor: "rgba(255,255,255,.08)",
          background: "#212A37",
          p: 2.5,
          "&, & *": { fontFamily: "var(--font-mono)" },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
          Get in touch
        </Typography>
        <Typography sx={{ opacity: 0.9, mb: 2 }}>
          Principal Engineer • Data & Platforms • GCP • Next.js
        </Typography>

        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
          <Chip size="small" label="Dripping Springs, TX (CT)" />
          <Chip size="small" label="Open to consulting & collabs" />
          <Chip size="small" label="Response: ~24–48h" />
        </Stack>

        <Divider sx={{ borderColor: "rgba(255,255,255,.08)", mb: 2 }} />

        <Stack spacing={1.25} sx={{ mb: 2 }}>
          <Stack direction="row" spacing={1.25}>
            <Button
              component={Link}
              href={mailtoHref}
              variant="outlined"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Email me
            </Button>

            <Tooltip title="Copy email address">
              <Button
                variant="text"
                size="small"
                onClick={() => copy(email, "email")}
                sx={{ textTransform: "none" }}
                startIcon={<ContentCopyIcon fontSize="small" />}
              >
                Copy email
              </Button>
            </Tooltip>
          </Stack>

          <Stack direction="row" spacing={1.25}>
            <Button
              component={Link}
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              size="small"
              sx={{ textTransform: "none" }}
              endIcon={<OpenInNewIcon fontSize="small" />}
            >
              LinkedIn
            </Button>
            <Button
              component={Link}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              size="small"
              sx={{ textTransform: "none" }}
              endIcon={<OpenInNewIcon fontSize="small" />}
            >
              GitHub
            </Button>
          </Stack>

          {/* Use a real <a download> so the browser downloads immediately */}
          <Stack direction="row" spacing={1.25}>
            <Button
              component="a"
              href={resumeUrl}
              download
              variant="text"
              size="small"
              sx={{ textTransform: "none" }}
              startIcon={<DownloadIcon fontSize="small" />}
            >
              Download résumé (PDF)
            </Button>
            <Button
              component="a"
              href={vcardUrl}
              download
              variant="text"
              size="small"
              sx={{ textTransform: "none" }}
              startIcon={<DownloadIcon fontSize="small" />}
            >
              Add to contacts (vCard)
            </Button>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: "rgba(255,255,255,.08)", mb: 2 }} />

        <Typography sx={{ opacity: 0.9, mb: 1.25 }}>
          For fastest replies, include:
        </Typography>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", opacity: 0.9 }}>
          <li>Project goal & timeline</li>
          <li>Tech stack (e.g., GCP, BigQuery, Next.js, MySQL)</li>
          <li>Budget range or constraints</li>
        </ul>

        <Typography variant="caption" sx={{ display: "block", mt: 1.5, opacity: 0.75 }}>
          I keep a small slate of advisory/contract projects alongside full-time work.
        </Typography>
      </Box>

      <Snackbar
        open={Boolean(copied)}
        autoHideDuration={2000}
        onClose={() => setCopied(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ fontFamily: "var(--font-mono)" }}>
          {copied === "email" ? "Email address copied" : "Copied"}
        </Alert>
      </Snackbar>
    </Container>
  );
}
