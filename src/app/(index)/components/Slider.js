// MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// Utils
import { Colors } from "@/common/utils/constants";

// Next Components
import Link from "next/link";
import Image from "next/image";

// Icons
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Slider = ({ title, subtitle, image, buttonTitle, buttonHref }) => {
    return (
        <Stack
            direction="row"
            spacing={3}
            sx={{ height: 520, width: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Stack spacing={2}>
                <Typography variant="h3" sx={{ color: Colors.black }}>
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: Colors.primary }}
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                />
                {buttonTitle && (
                    <Stack alignItems={"center"}>
                        <Button
                            variant="container"
                            sx={{
                                backgroundColor: Colors.orange,
                                color: Colors.white,
                                borderRadius: 0,
                            }}
                            endIcon={<EastOutlinedIcon />}
                        >
                            {buttonTitle}
                        </Button>
                    </Stack>
                )}
            </Stack>
        </Stack>
    );
};

export default Slider;
