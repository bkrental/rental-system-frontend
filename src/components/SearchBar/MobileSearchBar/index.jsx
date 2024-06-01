import { Stack, styled, Button, SwipeableDrawer, Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import PriceSelect from "../PriceSelect";
import MobileAreaSelect from "../AreaSelect/Mobile";
import MobilePropertyTypeSelect from "../PropertyTypeSelect/Mobile";
import MobilePriceSelect from "../PriceSelect/Mobile";
import TuneIcon from "@mui/icons-material/Tune";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapIcon from "@mui/icons-material/Map";

const SearchBarContainer = styled(Stack)(({ theme }) => ({
  position: "fixed",
  paddingTop: 20,
  top: 60,
  flexDirection: "row",
  paddingBottom: theme.spacing(2),
  zIndex: 100,
  backgroundColor: "#fff",
  width: `calc(100% - ${theme.spacing(4)})`,
  gap: theme.spacing(2),
}));

export default function MobileSearchBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <SearchBarContainer
      sx={{
        display: {
          xs: "flex",
          sm: "flex",
          md: "none",
        },
      }}
    >
      <Button variant="contained" sx={{ flex: 1 }} startIcon={<MapIcon />}>
        <Typography>Map</Typography>
      </Button>
      <Button variant="contained" sx={{ flex: 1 }} startIcon={<FavoriteBorderIcon />}>
        <Typography>Favorites</Typography>
      </Button>
      <Button variant="contained" onClick={toggleDrawer(true)} sx={{ flex: 1 }} startIcon={<TuneIcon />}>
        <Typography>Filter</Typography>
      </Button>
      <SwipeableDrawer
        disableSwipeToOpen={true}
        anchor="bottom"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            borderRadius: "16px 16px 0 0",
            border: "1px solid #ddd",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
            height: "70vh",
          },
        }}
      >
        <Box
          sx={{
            padding: 2,
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
          }}
          role="presentation"
        >
          <MobilePropertyTypeSelect />
          <MobilePriceSelect />
          <MobileAreaSelect />
        </Box>
        <Box sx={{ padding: 2, borderTop: "1px solid #ddd" }}>
          <Button variant="contained" color="primary" fullWidth onClick={toggleDrawer(false)}>
            View Rentals
          </Button>
        </Box>
      </SwipeableDrawer>
    </SearchBarContainer>
  );
}
