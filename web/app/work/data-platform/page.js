import { Box, Typography, List, ListItem, ListItemText, Stack, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import WorkLayout from "@/app/components/work-layout";
import CaseSection from "@/app/components/case-section";

export default function DataPlatformPage() {
  return (
    <WorkLayout
      title="GCP Data Platform"
      subtitle="Dagster-orchestrated platform for exec reporting and operational feeds."
      badges={[
        { label: "Dagster on GCE (Docker)" },
        { label: "BigQuery + dbt + Pub/Sub" },
        { label: "Company-wide audiences" },
      ]}
    >
      <CaseSection heading="Context & Goal">
        <Typography sx={{ opacity: 0.92 }}>
          Deliver company-wide analytics and operational data products, not just BI, on fast,
          cost-controlled models that multiple teams can trust.
        </Typography>
      </CaseSection>

      <CaseSection heading="What I Built">
        <List dense>
          <ListItem disableGutters>
            <ListItemText primary="Dagster on a GCE VM (Docker) orchestrating BigQuery + dbt pipelines with Pub/Sub ingestion." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Partitioned/clustered marts, typed staging layers, and idempotent loads." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Operational feeds: Klaviyo purchase events, real-time retail dashboards, nightly revenue-accurate store closeouts, and other mini-SaaS integrations." />
          </ListItem>
        </List>
      </CaseSection>

      <CaseSection heading="Who It Serves">
        <Typography sx={{ opacity: 0.92 }}>
          Executives, Finance, Marketing, Retail Operations, Accounting, Sales, and Supply Chain.
        </Typography>
      </CaseSection>

      {/*<CaseSection heading="Architecture at a Glance">
        <Box sx={{ borderRadius: 2, overflow: "hidden", border: "1px solid rgba(255,255,255,.08)" }}>
          <Image
            src="/diagrams/data-platform-arch.png"
            alt="Data platform architecture diagram"
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </CaseSection>*/}

      <CaseSection heading="What I'd Improve Next">
        <List dense>
          <ListItem disableGutters>
            <ListItemText primary="Slim semantic layer + Slack AI data concierge so teams can pull governed slices." />
          </ListItem>
        </List>
      </CaseSection>

      {/*<Stack direction="row" spacing={1.5}>
        <Button component={Link} href="/contact" variant="outlined" size="small" sx={{ textTransform: "none" }}>
          Request a deeper walkthrough
        </Button>
      </Stack>*/}
    </WorkLayout>
  );
}
