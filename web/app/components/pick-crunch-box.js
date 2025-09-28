import Image from 'next/image';
import { Box } from '@mui/material';

export default function PickCrunchBox() {
  return (
    <a href="https://pickcrunch.com" target="_blank" rel="noopener noreferrer">
      <Box className="pick-crunch-box project-row">
        <Box className="project-media">
          <Image
            src="/PickCrunch-Main-RGB.png"
            width={200}
            height={100}
            alt="PickCrunch logo"
            priority
          />
        </Box>

        <Box sx={{ fontFamily: 'var(--font-mono)' }}>
          Create groups with your friends and pick NFL, NCAAFB, NBA, NCAABB, MLB and NHL games.
          Pick spreads and totals in matchup, ranked or flat pick modes.
        </Box>
      </Box>
    </a>
  );
}
