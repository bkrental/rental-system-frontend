import { PRICE_SUGGESTIONS } from "@/constants/price";
import { PROPERTY_TYPE_DETAILS } from "@/constants/propertyTypes";
import { getPriceOptionLabel } from "@/utils/getPriceLabel";
import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();
  const router = useRouter();

  const changePropertyType = (type) => {
    router.push(`${pathname}?property_type=${type}`);
  };

  const changePriceRange = (range) => {
    router.push(`${pathname}?price[gt]=${range[0]}&price[lt]=${range[1]}`);
  };

  return (
    <Box>
      <Paper variant="outlined" square={false} sx={{ mb: 3, pb: 1 }}>
        <Typography px={2} pt={2} variant="h6">
          Filter by property type
        </Typography>

        <List dense="dense">
          {PROPERTY_TYPE_DETAILS.slice(1).map((propertyType) => (
            <MenuItem
              key={propertyType.value}
              LinkComponent={Link}
              onClick={() => changePropertyType(propertyType.value)}
            >
              <ListItemIcon sx={{ color: "#000" }}>
                <propertyType.Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={propertyType.label} />
            </MenuItem>
          ))}
        </List>
      </Paper>

      <Paper variant="outlined" square={false} sx={{ mb: 2, pb: 1 }}>
        <Typography px={2} pt={2} variant="h6">
          Filter by price range
        </Typography>

        <List dense="dense">
          {PRICE_SUGGESTIONS.slice(1).map((price) => (
            <MenuItem
              key={price.value}
              LinkComponent={Link}
              onClick={() => changePriceRange(price)}
            >
              <ListItemText primary={getPriceOptionLabel(price)} />
            </MenuItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
