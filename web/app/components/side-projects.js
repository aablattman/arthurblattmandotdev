import { Box, Typography } from "@mui/material";

import PickCrunchBox from './pick-crunch-box';
import BTSBox from './boston-terrier-simulator-box';

// app/mono.js (optional helper—import where needed)
export const mono = { fontFamily: 'var(--font-mono)', mb: 2 };



export default function SideProjects() {
  return (
  <Box className="section">
      <Typography variant="h5" className="section-title" sx={mono}>Side Projects</Typography>
      
      <Box className="grid">
        <PickCrunchBox />
        <BTSBox />
      </Box>
    </Box>
  );
}