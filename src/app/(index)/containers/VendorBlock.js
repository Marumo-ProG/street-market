// MUI
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";

// Next Components
import Link from "next/link";
import Image from "next/image";

// Utils
import { Colors } from "@/common/utils/constants";

// Icons
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const VendorBlock = ({ username, subtitle, image, orders, isLiked, likes }) => {
    return (
        <Card sx={{ position: "relative" }}>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: Colors.orange,
                    color: Colors.white,
                    padding: 1,
                }}
            >
                {orders} Orders
            </Box>
            <Image
                src={image}
                sizes="100vw"
                alt={username}
                style={{ objectFit: "cover", aspectRatio: "16/9", height: 200, width: "100%" }}
            />
            <Stack spacing={2} padding={2} width={300}>
                <Stack spacing={1}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography variant="h6" sx={{ color: Colors.black }}>
                            {username}
                        </Typography>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
                    </Stack>
                    <Typography variant="body1" sx={{ color: Colors.primary, textAlign: "center" }}>
                        {subtitle}
                    </Typography>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        spacing={2}
                    >
                        <Button
                            variant="container"
                            sx={{
                                backgroundColor: Colors.orange,
                                color: Colors.white,
                                borderRadius: 0,
                            }}
                            endIcon={<EastOutlinedIcon />}
                        >
                            View Profile
                        </Button>
                        <IconButton>
                            <Typography variant="body1" sx={{ color: Colors.medGrey }}>
                                {likes}
                            </Typography>
                            {isLiked ? (
                                <FavoriteRoundedIcon sx={{ color: Colors.red }} />
                            ) : (
                                <FavoriteBorderRoundedIcon />
                            )}
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    );
};

export default VendorBlock;
