import { Box, Tooltip } from "@mui/material";
import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import Link from "next/link";
import * as React from "react";


export default function HomeNavbar() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: "350px",
        left: 50,
        zIndex: 999,
        backgroundColor: "#F6F8FB",
        borderRadius: "10px",
      }}
    >
      <Link href="#HEADER" passHref>
        <Tooltip title="HEADER" arrow placement="right">
          <Radio {...controlProps("a")} />
        </Tooltip>
      </Link>

      <Link href="#SERVICE" passHref>
      <Tooltip title="SERVICE" arrow placement="right">
        <Radio {...controlProps("b")} color="secondary" />
      </Tooltip>
      </Link>
   

      <Link href="#BOOST_AGENCIES" passHref>
      <Tooltip title="BOOST_AGENCIES" arrow placement="right">
        <Radio {...controlProps("c")} color="success" />
      </Tooltip>
      </Link>
 

        <Link href="#VIDEO_ON" passHref>
        <Tooltip title="VIDEO PLAY" arrow placement="right">
          <Radio {...controlProps("d")} color="default" />
          </Tooltip>
        </Link>
   
      <Link href="#TESTIMONIALS" passHref>
        <Tooltip title="TESTIMONIAL" arrow placement="right">
          <Radio {...controlProps("e")} color="default" />
        </Tooltip>
      </Link>

      <Link href="#CUSTOMER_SUPPORT" passHref>
        <Tooltip title="SUPPORT" arrow placement="right">
          <Radio {...controlProps("f")} color="default" />
        </Tooltip>
      </Link>

      <Link href="#MOST_CHOICE" passHref>
        <Tooltip title="MOST CHOICE" arrow placement="right">
          <Radio
            {...controlProps("g")}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        </Tooltip>
      </Link>
    </Box>
  );
}

// const classes = {
//   sidenav: {},
// };
