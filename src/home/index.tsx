import React from "react";
import TopMenu from "./topmenu";
import SideMenu from "./sidemenu";
import AppRoutes from "../routes";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <SideMenu />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <TopMenu />
        <AppRoutes />
      </Box>
    </Box>
  );
};

export default Home;
