import * as React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { AppBar, Box } from '@mui/material';



export default function PickCrunchBox() {
	return (
		<Box className="pick-crunch-box">
			<Image src="/PickCrunch-Main-RGB.png" width={200} height={200} alt="Pick Crunch Logo" />
			Create leagues with your friends and pick pro sports games NFL, MLB, NBA, NHL, NCAAFB, NCAABB. Supports spreads and totals. Leagues can be created in several fun formats.
		</Box>
	);
}