"use client";
import PrivateRoute from "@/components/PrivateRoute";
import { Circle } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Dialog,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import { forwardRef, useState } from "react";

const ImageWrapper = styled(Box)(() => ({
  position: "relative",
  aspectRatio: 1 / 1,
  overflow: "hidden",
}));

import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function LandlordPage() {
  // const [properties, setProperties] = useState([])
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState({
    id: "",
    name: "",
    address: "",
    thumbnail: "",
  });

  const properties = [
    {
      address: {
        province: "Hồ Chí Minh",
        district: "Quận 10",
        ward: "Phường 7",
        street: "unknown",
      },
      location: {
        type: "Point",
        coordinates: [106.66194615100005, 10.76032568900007],
      },
      _id: "662a2f75fd03792429d44123",
      name: "123",
      description: "213",
      area: 0,
      property_type: "house",
      transaction_type: "sale",
      price: 0,
      thumbnail:
        "https://res.cloudinary.com/dcxvuooke/image/upload/c_fill,h_600,w_900/ldyi9fbyit6zan44quwb?_a=BAMABma20",
      images: [
        "https://res.cloudinary.com/dcxvuooke/image/upload/c_fill,h_600,w_900/ldyi9fbyit6zan44quwb?_a=BAMABma20",
        "https://res.cloudinary.com/dcxvuooke/image/upload/c_fill,h_600,w_900/daafif87fzxhqddzwjk9?_a=BAMABma20",
        "https://res.cloudinary.com/dcxvuooke/image/upload/c_fill,h_600,w_900/bn3lnxdridrxodadi9vy?_a=BAMABma20",
        "https://res.cloudinary.com/dcxvuooke/image/upload/c_fill,h_600,w_900/c9idaiwtguvky1gjlww0?_a=BAMABma20",
        "https://res.cloudinary.com/dcxvuooke/image/upload/c_fill,h_600,w_900/xqwgvqueymkl8rghe88t?_a=BAMABma20",
      ],
      owner: {
        _id: "65efc7a1c64c0c033073d420",
        name: "Dat Nguyen",
        avatar: "",
      },
      source: "internal",
    },
    {
      address: {
        province: "Hồ Chí Minh",
        district: "Quận 10",
        ward: "Phường 7",
        street: "unknown",
      },
      location: {
        type: "Point",
        coordinates: [106.66194615100005, 10.76032568900007],
      },
      _id: "662dd7f5fd03792429d44137",
      name: "4567",
      description: "213",
      area: 2,
      property_type: "house",
      transaction_type: "sale",
      price: 0,
      thumbnail:
        "https://res.cloudinary.com/dcxvuooke/image/upload/c_fill,h_600,w_900/ldyi9fbyit6zan44quwb?_a=BAMABma20",
      images: [
        "https://res.cloudinary.com/dcxvuooke/image/upload/c_fill,h_600,w_900/ldyi9fbyit6zan44quwb?_a=BAMABma20",
        "https://res.cloudinary.com/dcxvuooke/image/upload/c_fill,h_600,w_900/daafif87fzxhqddzwjk9?_a=BAMABma20",
        "https://res.cloudinary.com/dcxvuooke/image/upload/c_fill,h_600,w_900/bn3lnxdridrxodadi9vy?_a=BAMABma20",
        "https://res.cloudinary.com/dcxvuooke/image/upload/c_fill,h_600,w_900/c9idaiwtguvky1gjlww0?_a=BAMABma20",
        "https://res.cloudinary.com/dcxvuooke/image/upload/c_fill,h_600,w_900/xqwgvqueymkl8rghe88t?_a=BAMABma20",
      ],
      bedrooms: 2,
      bathrooms: 3,
      owner: {
        _id: "65efc7a1c64c0c033073d420",
        name: "Dat Nguyen",
        avatar: "",
      },
      source: "internal",
    },
  ];

  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" mt={2} mb={2}>
        Your properties
      </Typography>

      <Grid container columns={12} spacing={3}>
        {properties.map((property) => (
          <Grid xs={12} sm={6} md={4} key={property._id} position="relative">
            <Card
              onClick={() => {
                setSelectedProperty({
                  id: property._id,
                  name: property.name,
                  address: property.address.district,
                  thumbnail: property.thumbnail,
                });
                setOpen(true);
              }}
              sx={{ cursor: "pointer" }}
            >
              <ImageWrapper>
                <Image
                  src={property.thumbnail}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="400px"
                />
              </ImageWrapper>
              <CardContent>
                <Typography variant="h5" component="div">
                  {property.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {property.address.district + ", " + property.address.province}
                </Typography>
              </CardContent>

              <Chip
                label="In progress"
                variant="outlined"
                size="small"
                icon={<Circle color="primary" fontSize="20" />}
                sx={{ position: "absolute", top: 20, right: 20, zIndex: 20 }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
      >
        <Box p={2} minWidth={400}>
          <ImageWrapper sx={{ height: 200, marginX: "auto" }}>
            <Image
              src={selectedProperty.thumbnail}
              fill
              style={{ objectFit: "contain" }}
              sizes="400px"
            />
          </ImageWrapper>

          <Stack justifyContent="center" alignItems="center" mb={3}>
            <Typography variant="h5" component="h1" align="center">
              {selectedProperty.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedProperty.address}
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Button size="small" variant="contained">
              Edit property
            </Button>
            <Button size="small">Remove property</Button>
          </Stack>
        </Box>
      </Dialog>
    </Container>
  );
}

export default PrivateRoute(LandlordPage);
