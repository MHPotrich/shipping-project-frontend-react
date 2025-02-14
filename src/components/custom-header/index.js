"use client"

import { AppBar, Toolbar, Box, Button, Container } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./style.css";
import { useState } from "react";

const pages = [
  {
    displayName: "Home",
    href: "/",
  },
  {
    displayName: "Track shipping",
    href: "/track",
  },
];

function LoginHeaderArea() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  if (isUserLoggedIn) {
    return (
      <Box sx={{ marginLeft: "auto" }}>
        <Button sx={{ my: 2, color: "white", display: "block" }}>
          <AccountCircleIcon />
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ marginLeft: "auto" }}>
      <Button sx={{ my: 2, color: "white", display: "block" }} onClick={() => {setIsUserLoggedIn(!isUserLoggedIn)}}>Login</Button>
    </Box>
  );
}

export default function CustomHeader() {
  return (
    <AppBar id="custom-header">
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.href}
                sx={{ my: 2, color: "white", display: "block" }}
                href={page.href}
              >
                {page.displayName}
              </Button>
            ))}
          </Box>
          <LoginHeaderArea />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
