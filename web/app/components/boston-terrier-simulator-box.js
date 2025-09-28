import Image from 'next/image';
import { Box } from '@mui/material';

export default function BTSBox() {
  return (
    <Box className="bts-box project-row">
      <Box className="project-media">
        <Image
          src="/bts_silhouette.png"
          width={200}
          height={100}
          alt="Boston Terrier Simulator logo"
          priority
        />
      </Box>

      <Box sx={{ fontFamily: 'var(--font-mono)' }}>
        Coming Soon! Simulate the life and times of Boston Terriers on Earth.
        Inspired by SimEarth and Dwarf Fortress.
      </Box>
    </Box>
  );
}
