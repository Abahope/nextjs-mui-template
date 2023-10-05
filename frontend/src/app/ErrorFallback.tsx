import { Box, Container, Stack, Typography } from "@mui/material";

import Link from "../components/Link";
import { RoutePath } from "../constants/routes";

export default function ErrorFallback() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight={"100vh"}
      >
        <Stack sx={{ gap: 3, alignItems: "center" }}>
          <Typography variant="h1">Oops</Typography>
          <Typography variant="h6" component="span">
            Something went wrong
          </Typography>
          <Link href={RoutePath.HOME}>Go to home page</Link>
        </Stack>
      </Box>
    </Container>
  );
}
