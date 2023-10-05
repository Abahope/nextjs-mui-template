import { Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container>
        <Stack sx={{ gap: 3, alignItems: "center" }}>
          <Typography variant="h1">All good</Typography>
          <Typography variant="h6" component="span">
            Edit page.tsx
          </Typography>
        </Stack>
      </Container>
    </main>
  );
}
