// MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// Next Components
import Link from "next/link";

// Utils
import { Colors } from "../utils/constants";

// Icons

const IconLink = ({ Icon, text, href }) => {
    return (
        <Link href={href} style={{ textDecoration: "none", color: "black" }}>
            <Stack direction={"row"} alignItems={"center"} height={"100%"} spacing={1}>
                <Icon sx={{ color: Colors.medGrey, fontSize: 24 }} />
                <Typography variant="body" sx={{ color: Colors.medGrey }}>
                    {text}
                </Typography>
            </Stack>
        </Link>
    );
};

export default IconLink;
