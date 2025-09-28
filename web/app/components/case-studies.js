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
          title="5 Star Rewards (Loyalty 2025)"
          blurb="In-house vendor replacement for points accrual and automated redemption with live POS 'apply to cart'. Balance/history surfaced in storefront and internal tools."
          stack="Cloud Run (FastAPI), Cloud SQL Postgres, Shopify Plus, React admin, BigQuery + dbt"
          href={"https://arthurblattman.dev/work/loyalty"}
        />
        <CaseStudyCard
          title="5 Star Fit Transformation Challenge"
          blurb="Automated, event-driven challenge platform. 4,000+ participants in month one, instant SMS rewards via Klaviyo, POS and storefront integrations."
          stack="Cloud SQL, Next.js, Shopify Hydrogen, Klaviyo, Pub/Sub"
          href={"https://arthurblattman.dev/work/challenge"}
        />
        <CaseStudyCard
          title="GCP Data Platform"
          blurb="BigQuery + dbt + Dagster + Pub/Sub with partitioning & clustering for exec-grade reporting. ~40% infra cost reduction and ~80% fewer fulfillment/inventory issues."
          stack="BigQuery, dbt, Dagster, Pub/Sub, CI/CD"
          href={"https://arthurblattman.dev/work/data-platform"}
        />
      </Box>
    </Box>
  );
}
