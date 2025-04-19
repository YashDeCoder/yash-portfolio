"use client";

import { useRouter } from "next/navigation";
import React from "react";
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

const GitHubIcon = () => {
  return (
    <Image
      aria-hidden
      src="/github-mark-white.svg"
      alt="Globe icon"
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

  // TODO: Do I need the event?
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);

      router.push(newAlignment);
    }
  };

  return (
    <header className="sticky top-0 flex flex-row justify-between w-full h-fit min-w-0 p-8">
      {/* Not centered */}
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
            aria-label="text alignment"
            onChange={handleAlignment}
          >
            <ToggleButton
              value="/"
              sx={{
                color: "grey", // Default grey color for text/icon
                "&.Mui-selected": {
                  color: "white", // White text/icon when selected
                  //   backgroundColor: "transparent", // Grey background when selected
                  border: "1px solid white", // White border when selected
                },
              }}
            >
              <HomeOutlinedIcon fontSize="small" />
            </ToggleButton>

            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

            <ToggleButton
              value="work"
              sx={{
                color: "grey", // Default grey color for text/icon
                "&.Mui-selected": {
                  color: "white", // White text/icon when selected
                  //   backgroundColor: "transparent", // Grey background when selected
                  border: "1px solid white", // White border when selected
                },
              }}
            >
              <WorkOutlineOutlinedIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Paper>
      </div>

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
  );
};
