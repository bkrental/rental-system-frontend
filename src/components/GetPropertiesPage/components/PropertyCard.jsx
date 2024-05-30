import { PROPERTY_TYPES } from "@/constants/propertyTypes";
import { CropFreeOutlined, GradeOutlined } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import SingleBedOutlinedIcon from "@mui/icons-material/SingleBedOutlined";
import { Avatar, Box, Card, CardContent, CardHeader, Chip, Divider, IconButton, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { deepOrange } from "@mui/material/colors";
import Link from "next/link";

const lineTruncate = (line = 1) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: `${line}`,
  WebkitBoxOrient: "vertical",
});

export default function PropertyCard({
  property: { _id, address, name, description, price, area, thumbnail, owner, bedrooms, bathrooms, property_type },
}) {
  bedrooms = 1;
  bathrooms = 1;
  const formatAddress = ({ street, district, province }) => {
    return `${street}, ${district}, ${province}`;
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 390 }} key={_id}>
      <CardMedia image={thumbnail} sx={{ width: "100%", height: 230, objectFit: "contain" }} title={name} />
      <CardContent>
        <Box display="flex" mb={1} gap={1}>
          <Chip size="small" icon={<GradeOutlined />} label="Tin mới" color="blue" />
          <Chip size="small" label={PROPERTY_TYPES[property_type].viLabel} />
        </Box>
        <Typography
          variant="h4"
          component={Link}
          href={`/posts/${_id}`}
          gutterBottom
          sx={{
            fontSize: "1rem",
            lineHeight: 1.25,
            fontWeight: 600,
            textDecoration: "none",
            color: "text.primary",
            textWrap: "stable",
            ...lineTruncate(1),
          }}
        >
          {formatAddress(address)}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "1.25rem" }} color="primary" gutterBottom>
          {price + " triệu/tháng"}
        </Typography>
        <Box display="flex" alignItems="center" gap={3} mb={1}>
          <Box display="flex" alignItems="center">
            <SingleBedOutlinedIcon sx={{ fontSize: 20, marginRight: 0.5 }} />
            <Typography variant="body1">{`${bedrooms} pn`}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <ShowerOutlinedIcon sx={{ fontSize: 20, marginRight: 0.5 }} />
            <Typography variant="body1">{`${bathrooms} wc`}</Typography>
          </Box>
          {area && (
            <Box display="flex" alignItems="center">
              <CropFreeOutlined sx={{ fontSize: 20, marginRight: 0.5 }} />
              <Typography variant="body1">
                {area + "m"}
                <sup>2</sup>
              </Typography>
            </Box>
          )}
        </Box>
        <Typography variant="body2" paragraph sx={{ ...lineTruncate(2) }}>
          {description}
        </Typography>
      </CardContent>
      <Divider />
      <CardHeader
        sx={{ paddingX: 2, paddingY: 1 }}
        avatar={
          <Avatar
            sx={{ bgcolor: deepOrange[500], width: 32, height: 32 }}
            aria-label={owner?.name || "Ẩn danh"}
            alt={owner?.name || "Ẩn danh"}
            src={owner?.avatar}
          />
        }
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
        }
        title={owner?.name || "Ẩn danh"}
        subheader="Đăng hôm nay"
      />
    </Card>
  );
}
