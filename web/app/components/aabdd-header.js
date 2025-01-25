import * as React from 'react';
import {AppBar, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';



export default function AabddHeader() {
	return (
		<Box className="aabdd-header">
			<span>arthurblattman.dev</span>
			<Box className="header-icons">
				<Link className="leetcode-link" href="https://leetcode.com/u/aablattman/" passHref>
					<Image src="/leetcode.png" alt="LeetCode Icon" width={24} height={24} />
				</Link>
				<Link className="github-link" href="https://pickcrunch.com" passHref>
					<Image src="/PickCrunch-Icon-RGB.png" alt="Pick Crunch Icon" width={24} height={24} />
				</Link>
				<Link className="github-link" href="https://github.com/aablattman/arthurblattmandotdev" passHref>
					<Image src="/github-mark-white.png" alt="GitHub Icon" width={24} height={24} />
				</Link>
			</Box>
		</Box>
	);
}