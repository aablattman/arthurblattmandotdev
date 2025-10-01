import { Container, Box, Stack, Typography, Chip, Divider } from "@mui/material";
import PropTypes from "prop-types";

const chipSx = {
  color: "rgba(237,237,237,.92)",
  borderColor: "rgba(237,237,237,.28)",
  backgroundColor: "transparent",
  "& .MuiChip-label": { px: 1 },
};

export default function WorkLayout({ title, subtitle, badges = [], children }) {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
        sx={{
          borderRadius: 2,
          border: "1px solid",
          borderColor: "rgba(255,255,255,.08)",
          background: "#212A37",
          p: 2.5,

          /* Force mono font on MUI components inside */
          "&, & *": { fontFamily: "var(--font-mono)" },
          "& .MuiTypography-root": { fontFamily: "var(--font-mono)" },
          "& .MuiChip-label": { fontFamily: "var(--font-mono)" },
          "& .MuiListItemText-primary": { fontFamily: "var(--font-mono)" },
          "& .MuiButton-root": { fontFamily: "var(--font-mono)" },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ opacity: 0.9, mb: 1.5 }}>{subtitle}</Typography>

        {badges?.length > 0 && (
          <Stack direction="row" spacing={1.25} sx={{ flexWrap: "wrap", mb: 2 }}>
            {badges.map((b, i) => (
              <Chip key={i} label={b.label} size="small" variant="outlined" sx={chipSx} />
            ))}
          </Stack>
        )}

        <Divider sx={{ opacity: 0.2 }} />
        <Box sx={{ mt: 2 }}>{children}</Box>
      </Box>
    </Container>
  );
}

WorkLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string.isRequired })),
  children: PropTypes.node,
};
