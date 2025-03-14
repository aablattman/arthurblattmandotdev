import * as React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';



export default function PickCrunchBox() {
	return (
		<a href="https://pickcrunch.com" target="_blank" rel="noopener noreferrer">
			<Box className="pick-crunch-box">
				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Image src="/PickCrunch-Main-RGB.png" width={200} height={100} alt="Pick Crunch Logo" />
				</Box>
				
				<Box sx={{ marginLeft: 10, flexGrow: 1, display: "flex", alignItems: "center" }}>
					Create groups with your friends and pick NFL, NCAAFB, NBA, NCAABB, MLB
					and NHL games. Pick spreads and totals in matchup, ranked or flat pick
					modes.
				</Box>
			</Box>
		</a>
	);
}