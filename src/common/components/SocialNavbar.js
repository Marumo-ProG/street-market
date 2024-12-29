"use client";

// MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// Utils
import { Colors, PageGutter } from "../utils/constants";

// Icons
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const SocialNavbar = () => {
    return (
        <Stack
            py={2}
            backgroundColor={Colors.primary}
            direction="row"
            justifyContent={"space-between"}
            px={PageGutter}
            alignItems={"center"}
            borderBottom={"1px solid #fff"}
        >
            <Stack>
                <Typography variant="body" sx={{ color: Colors.white }}>
                    Welcome to <b>Street Market</b>, <i>sell and buy anything</i>
                </Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Typography variant="body" sx={{ color: Colors.white }}>
                    Follow us on:
                </Typography>
                <IconButton sx={{ color: Colors.white, fontSize: 16 }}>
                    <FacebookRoundedIcon />
                </IconButton>
                <IconButton sx={{ color: Colors.white, fontSize: 16 }}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton sx={{ color: Colors.white, fontSize: 16 }}>
                    <InstagramIcon />
                </IconButton>
                <IconButton sx={{ color: Colors.white, fontSize: 16 }}>
                    <XIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default SocialNavbar;
