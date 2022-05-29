import { Container, Typography } from "@mui/material";
import React from "react";

export function AuxiliaryPage(): React.ReactElement {
    
    
return (
    <Container maxWidth="lg">
      <Typography variant="h4">Welcome to the split-screen page!</Typography>
      <Typography>You can navigate to another page by pressing the Shift key while using the sidebar, or usin the usual keybinding - if enabled -</Typography>
      <Typography>Do notice that not all Page will be accessible in the split screen to prevent shenanigans.</Typography>
    </Container>
  );
}
