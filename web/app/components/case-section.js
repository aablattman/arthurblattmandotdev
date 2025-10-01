import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function CaseSection({ heading, children }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontFamily: "var(--font-mono)" }}>
        {heading}
      </Typography>
      <Box>{children}</Box>
    </Box>
  );
}

CaseSection.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
};
