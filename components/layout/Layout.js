import { Box } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../common/footer/footer";
import Navbar from "../common/navbar";

function Layout({ children }) {
  const [darkTheme, setDarkTheme] = useState(undefined);
  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <>
      <Head>
        <title>rkreza</title>
      </Head>
      <Navbar darkTheme={darkTheme} handleToggle={handleToggle} />
      <Box
        sx={{
          minHeight: "600px",
          p: 10,
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
