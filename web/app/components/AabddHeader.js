import * as React from 'react';
import {AppBar, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';



export default function AabddHeader() {
	return (
		<Box className="aabdd-header">
			<span>arthurblattman.dev</span>
			<Link className="github-link" href="https://github.com/aablattman/arthurblattmandotdev" passHref>
				<Image src="/github-mark-white.png" alt="GitHub" width={24} height={24} />
			</Link>
		</Box>
	);
}