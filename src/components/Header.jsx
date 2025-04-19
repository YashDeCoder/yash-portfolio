"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const GitHubIcon = () => {
  return (
    <Image
      aria-hidden
      src="/github-mark-white.svg"
      alt="Github icon"
      width={20}
      height={20}
    />
  );
};

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },

  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: "1px solid transparent",
    },
}));

export const Header = () => {
  const router = useRouter();
  const [alignment, setAlignment] = React.useState("/");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      router.push(newAlignment);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const mobileMenuItems = [
    {
      text: "Email",
      icon: <MailOutlineOutlinedIcon />,
      action: () => {
        window.open("mailto:yashisrani35@gmail.com", "_blank");
        setMobileMenuOpen(false);
      },
    },
    {
      text: "Github",
      icon: <GitHubIcon />,
      action: () => {
        window.open("https://github.com/YashDeCoder", "_blank");
        setMobileMenuOpen(false);
      },
    },
    {
      text: "Amsterdam, NL",
      icon: (
        <div className="flex items-center">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={20}
            height={20}
          />
          <span className="ml-1 text-sm font-semibold"></span>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 hidden md:flex flex-row justify-between w-full p-4 lg:p-8 z-10">
        {/* Location */}
        <div className="flex justify-start items-center w-full">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={20}
            height={20}
          />
          <span className="ml-1 text-sm font-semibold">Amsterdam, NL</span>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center w-full">
          <Paper
            elevation={0}
            sx={(theme) => ({
              display: "flex",
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: "8px",
              flexWrap: "wrap",
              backgroundColor: "black",
              outline: "grey solid 0.5px",
            })}
          >
            <StyledToggleButtonGroup
              size="small"
              value={alignment}
              exclusive
              aria-label="navigation"
              onChange={handleAlignment}
            >
              <ToggleButton
                value="/"
                sx={{
                  color: "grey",
                  "&.Mui-selected": {
                    color: "white",
                    border: "1px solid white",
                  },
                }}
              >
                <HomeOutlinedIcon fontSize="small" />
              </ToggleButton>

              <Divider
                flexItem
                orientation="vertical"
                sx={{ mx: 0.5, my: 1 }}
              />

              <ToggleButton
                value="work"
                sx={{
                  color: "grey",
                  "&.Mui-selected": {
                    color: "white",
                    border: "1px solid white",
                  },
                }}
              >
                <WorkOutlineOutlinedIcon />
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </div>

        {/* Contact Links */}
        <div className="flex justify-end items-center w-full">
          <a
            className="flex items-center gap-1 hover:underline hover:underline-offset-4"
            href="mailto:yashisrani35@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailOutlineOutlinedIcon />
            <span className="ml-1 text-sm font-semibold">Email</span>
          </a>
          <Divider flexItem orientation="vertical" sx={{ mx: 1 }} />
          <a
            className="flex items-center gap-1 hover:underline hover:underline-offset-4"
            href="https://github.com/YashDeCoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <span className="ml-1 text-sm font-semibold">Github</span>
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-0 flex md:hidden flex-row justify-between items-center w-full p-4 z-10">
        <Paper
          elevation={0}
          sx={(theme) => ({
            display: "flex",
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: "8px",
            backgroundColor: "black",
            outline: "grey solid 0.5px",
          })}
        >
          <StyledToggleButtonGroup
            size="small"
            value={alignment}
            exclusive
            aria-label="navigation"
            onChange={handleAlignment}
          >
            <ToggleButton
              value="/"
              sx={{
                color: "grey",
                "&.Mui-selected": {
                  color: "white",
                  border: "1px solid white",
                },
              }}
            >
              <HomeOutlinedIcon fontSize="small" />
            </ToggleButton>

            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

            <ToggleButton
              value="work"
              sx={{
                color: "grey",
                "&.Mui-selected": {
                  color: "white",
                  border: "1px solid white",
                },
              }}
            >
              <WorkOutlineOutlinedIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Paper>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileMenu}
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
      </header>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "black",
            color: "white",
            width: "70%",
            maxWidth: "300px",
          },
        }}
      >
        <Box sx={{ width: "100%" }} role="presentation">
          <List>
            {mobileMenuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={item.action}>
                  <ListItemIcon sx={{ color: "white", minWidth: "40px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
