import { Container, Stack, Typography } from "@mui/material";

import ThrowErrorButton from "./ThrowErrorButton";

export default function Home() {
  return (
    <main>
      <Container>
        <Stack sx={{ gap: 3, alignItems: "center" }}>
          <Typography variant="h1">All good</Typography>
          <Typography variant="h6" component="span">
            Edit page.tsx
          </Typography>
          <ThrowErrorButton />
        </Stack>
      </Container>
    </main>
  );
}
