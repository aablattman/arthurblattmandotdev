import * as React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';



export default function BTSBox() {
	return (
		<Box className="bts-box">
			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
				<Image src="/bts_silhouette.png" width={200} height={100} alt="Boston Terrier Simulator Logo" />
			</Box>
			
			<Box sx={{ marginLeft: 10, flexGrow: 1, display: "flex", alignItems: "center" }}>
				Coming Soon!
				Simulate the life and times of Boston Terriers on Earth. Inspired by SimEarth and Dwarf Fortress.
			</Box>
		</Box>
	);
}