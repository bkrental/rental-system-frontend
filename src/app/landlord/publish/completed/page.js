import { Button, Container, Stack, Typography } from "@mui/material";

export default function PublishPostCompletedPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography align="center" variant="h4" component="h1">
        Post published successfully 💥
      </Typography>

      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Button variant="contained">Back to home</Button>
        <Button variant="contained">View your properties</Button>
      </Stack>
    </Container>
  );
}
