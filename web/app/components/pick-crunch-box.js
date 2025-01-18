import * as React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';



export default function PickCrunchBox() {
	return (
		<Box className="pick-crunch-box">
			<Image src="/PickCrunch-Main-RGB.png" width={200} height={200} alt="Pick Crunch Logo" />
			
		        Create groups with your friends and pick NFL, NCAAFB, NBA, NCAABB, MLB
		        and NHL games. Pick spreads and totals in matchup, ranked or flat pick
		        modes.

		</Box>
	);
}