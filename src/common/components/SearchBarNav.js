"use client";

// MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Badge from "@mui/material/Badge";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

// Utils
import { Colors, PageGutter } from "../utils/constants";

// Next Components
import Image from "next/image";

const SearchBarNav = () => {
    return (
        <Stack
            py={2}
            direction="row"
            justifyContent={"space-between"}
            px={PageGutter}
            alignItems={"center"}
            backgroundColor={Colors.primary}
        >
            <Stack direction="row" spacing={1} alignItems={"center"}>
                <Image
                    src="/logos/street.jpg"
                    alt="Street Market Logo"
                    width={50}
                    height={50}
                    style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                    }}
                />
                <Typography variant="h6" sx={{ color: Colors.white }}>
                    Street Market
                </Typography>
            </Stack>
            <TextField
                type="search"
                placeholder="Search"
                variant="outlined"
                sx={{
                    width: "40%",
                    borderRadius: "5px",
                    backgroundColor: Colors.white,
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <IconButton sx={{ color: Colors.white }}>
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <IconButton sx={{ color: Colors.white }}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton sx={{ color: Colors.white }}>
                    <PersonIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default SearchBarNav;
