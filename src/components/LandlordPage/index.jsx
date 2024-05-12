"use client";
import { useEffect } from "react";
import { Container, Grid, Card, CardContent, CardActions, CardMedia, Typography, Button } from "@mui/material";
import { useGetMyPropertiesQuery } from "@/redux/features/landlord/api";

const LandlordPropertiesPage = () => {
  const { data, error, isLoading } = useGetMyPropertiesQuery();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        My Properties
      </Typography>
      <Grid container spacing={3}>
        {(data?.properties ?? []).map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property._id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={property.thumbnail || "/no-image-available.jpg"}
                alt={property.name}
              />
              <CardContent>
                <Typography variant="h5">{property.name}</Typography>
                <Typography variant="body2">{property.description}</Typography>
                <Typography variant="body1">${property.price}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary">
                  View
                </Button>
                <Button variant="contained" color="secondary">
                  Edit
                </Button>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LandlordPropertiesPage;
