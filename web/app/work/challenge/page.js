import { Box, Typography, List, ListItem, ListItemText, Stack, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import WorkLayout from "@/app/components/work-layout";
import CaseSection from "@/app/components/case-section";

export default function ChallengePage() {
  return (
    <WorkLayout
      title="Challenge"
      subtitle="Automated, event-driven challenge with device-verified body-composition impact."
      badges={[
        { label: "Launched: Feb 2025" },
        { label: "140k device scans" },
        { label: "21k enrollments" },
        { label: "17k lbs improved" },
      ]}
    >
      <CaseSection heading="Context & Goal">
        <Typography sx={{ opacity: 0.92 }}>
          Replace a rigid, manual challenge with an always-on program that ingests
          body-scanner data and issues instant rewards tied to verified progress.
        </Typography>
      </CaseSection>

      <CaseSection heading="What I Built">
        <List dense>
          <ListItem disableGutters>
            <ListItemText primary="POS opt-in and Shopify companion flows so customers can join, track progress, and see milestones." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Body-scanner ingestion with normalized, de-duplicated events mapped to each participant’s timeline." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Real-time milestone detection that issues instant Klaviyo SMS rewards and surfaces the reward in POS." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Support tooling and audit trails for troubleshooting and safe manual corrections." />
          </ListItem>
        </List>
      </CaseSection>

      <CaseSection heading="Architecture at a Glance">
        <Box sx={{ borderRadius: 2, overflow: "hidden", border: "1px solid rgba(255,255,255,.08)" }}>
          <Image
            src="/challenge-arch.png"
            alt="Challenge architecture diagram"
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </CaseSection>

      <CaseSection heading="Results (first ~8 months)">
        <List dense>
          <ListItem disableGutters>
            <ListItemText primary="~140k device scans processed; ~21k challenge enrollments." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="~17k lbs of verified body-composition improvement (muscle gain or fat loss)." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Time-to-reward reduced from days (manual weekly batch tabulation) to seconds at milestone events." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Replaced nationwide “weigh-in / weigh-out” batch ops with continuous, device-verified automation." />
          </ListItem>
        </List>
      </CaseSection>

      <CaseSection heading="What I'd Improve Next">
        <List dense>
          <ListItem disableGutters>
            <ListItemText primary="Group challenges: leader join codes (shown in POS + Shopify), with leaderboards and group stats in both surfaces." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Ops dashboard: queues and milestones (pending/sent/canceled) with safe replay." />
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
