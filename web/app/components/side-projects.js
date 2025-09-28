import { Box, Typography } from "@mui/material";

import PickCrunchBox from './pick-crunch-box';
import BTSBox from './boston-terrier-simulator-box';

const mono = {
  fontFamily:
    'var(--font-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};


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