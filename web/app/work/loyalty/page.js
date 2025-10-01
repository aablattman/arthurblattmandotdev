import { Box, Stack, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import WorkLayout from "@/app/components/work-layout";
import CaseSection from "@/app/components/case-section";

export default function LoyaltyPage() {
  return (
    <WorkLayout
      title="Loyalty"
      subtitle="In-house loyalty replacing vendor lock-in; real-time checkout and admin control."
      badges={[
        { label: "Role: Principal Engineer" },
        { label: "Year: 2025" },
        { label: "Scale: ~20k participants/season" },
      ]}
    >
      <CaseSection heading="Context & Goal">
        <Typography sx={{ opacity: 0.92 }}>
          Replace third-party loyalty to cut SaaS cost and regain control over rules and data.
          Support real-time checkout, accurate balances, and admin workflows.
        </Typography>
      </CaseSection>

      <CaseSection heading="What I Built">
        <List dense>
          <ListItem disableGutters>
            <ListItemText primary="Real-time loyalty at checkout with one-tap POS Apply to Cart." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Automates points accrual/redemption with idempotent writes and timezone-corrected history." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="In-house admin console: balance/history views, profile-merge, manual adjustments, and audit trails." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Exports events to BigQuery + dbt for analytics without duplicating business logic." />
          </ListItem>
        </List>
      </CaseSection>

      <CaseSection heading="Architecture at a Glance">
        <Box sx={{ borderRadius: 2, overflow: "hidden", border: "1px solid rgba(255,255,255,.08)" }}>
          <Image
            src="/loyalty-arch.png"   // supply a mocked diagram
            alt="Loyalty architecture diagram"
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </CaseSection>

      <CaseSection heading="Key Decisions & Tradeoffs">
        <List dense>
          <ListItem disableGutters>
            <ListItemText primary="Postgres as source of truth; analytics in BigQuery to avoid logic drift." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Deterministic naming + DB constraints to prevent double counting." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="URL-addressable admin flows for faster QA/support." />
          </ListItem>
        </List>
      </CaseSection>

      <CaseSection heading="What I'd Improve Next">
        <List dense>
          <ListItem disableGutters>
            <ListItemText primary="Rule templates for variable challenge windows and promotions." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Ops dashboard for scheduled tasks and cancellations." />
          </ListItem>
        </List>
      </CaseSection>

      {/*<Stack direction="row" spacing={1.5}>
        <Button
          component={Link}
          href="/contact"
          variant="outlined"
          size="small"
          sx={{ textTransform: "none" }}
        >
          Request a deeper walkthrough
        </Button>
      </Stack>*/}
    </WorkLayout>
  );
}
