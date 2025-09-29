import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

export default function AabddHeader() {
  return (
    <Box className="aabdd-header" component="header" role="banner">
      <Box className="brand"><a href="/"><span>arthurblattman.dev</span></a></Box>
      <Box className="header-icons" role="navigation" aria-label="Quick links">
        <Link aria-label="PickCrunch" href="https://pickcrunch.com" target="_blank" rel="noopener noreferrer" title="PickCrunch">
          <Image src="/PickCrunch-Icon-RGB.png" alt="PickCrunch icon" width={24} height={24} />
        </Link>
        <Link aria-label="LeetCode" href="https://leetcode.com/u/aablattman/" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <Image src="/leetcode.png" alt="LeetCode icon" width={24} height={24} />
        </Link>
        <Link aria-label="GitHub" href="https://github.com/aablattman" target="_blank" rel="noopener noreferrer" title="GitHub">
          <Image src="/github-mark-white.png" alt="GitHub icon" width={24} height={24} />
        </Link>
      </Box>
    </Box>
  );
}
