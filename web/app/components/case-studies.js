import { Roboto_Mono } from "next/font/google";
import { Box, Typography } from "@mui/material";
import CaseStudyCard from "./case-study-card";

export const mono = { fontFamily: 'var(--font-mono)' };


export default function CaseStudies() {
  return (
    <Box className="section">
      <Typography variant="h5" className="section-title" sx={mono}>Selected Work</Typography>
      <Box className="grid">
        <CaseStudyCard
          title="Loyalty"
          blurb="Real-time loyalty at checkout with one-tap POS Apply to Cart. Automates points accrual/redemption and surfaces balance/history in an in-house admin console with profile-merge and manual-adjustment workflows."
          stack="Cloud Run (FastAPI), Cloud SQL Postgres, BigQuery, dbt, Next.js, Newstore POS, Klaviyo"
          href="/work/loyalty"
        />

        <CaseStudyCard
          title="Challenge"
          blurb="Event-driven challenge with 17k+ lbs of verified body-composition improvement. Ingests body-scanner data and triggers instant Klaviyo SMS rewards across POS + Shopify."
          stack="Cloud Run (FastAPI), Cloud SQL Postgres, Pub/Sub, Cloud Tasks, Next.js, Shopify Hydrogen, Newstore POS, Klaviyo"
          href={"/work/challenge"}
        />
        <CaseStudyCard
          title="GCP Data Platform"
          blurb="Dagster data platform with BigQuery, dbt, and Pub/Sub. Powers exec-grade reporting and operational feeds for Finance, Marketing, Retail Ops, Accounting, Sales, and Supply Chain, all on partitioned/clustered models for fast, cost-efficient queries."
          stack="BigQuery, dbt, Dagster (Docker on GCE VM), Pub/Sub, CI/CD"
          href={"/work/data-platform"}
        />
      </Box>
    </Box>
  );
}
