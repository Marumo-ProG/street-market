// MUI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// Components
import IconLink from "./IconLink";

// Utils
import { Colors, PageGutter } from "../utils/constants";

// Icons
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const CategoryBar = () => {
    return (
        <Stack
            py={2}
            direction="row"
            justifyContent={"space-between"}
            px={PageGutter}
            alignItems={"center"}
            borderBottom={"1px solid " + Colors.medGrey}
        >
            <Stack direction={"row"} spacing={3} alignContent={"center"}>
                <Button
                    variant="outlined"
                    sx={{
                        py: "14px",
                        px: 3,
                        border: "none",
                        backgroundColor: Colors.greyLight,
                        textTransform: "none",
                    }}
                    endIcon={<ExpandMoreRoundedIcon />}
                >
                    All Category
                </Button>

                <IconLink Icon={PinDropOutlinedIcon} text={"Track Order"} href={"/"} />
                <IconLink Icon={CachedRoundedIcon} text={"Compare"} href={"/"} />
                <IconLink Icon={HeadphonesRoundedIcon} text={"Customer Support"} href={"/"} />
                <IconLink Icon={InfoOutlinedIcon} text={"Need Help"} href={"/"} />
            </Stack>
            <IconLink Icon={CallOutlinedIcon} text={"+27 (63) 195 8805"} href={"tell:0631958805"} />
        </Stack>
    );
};

export default CategoryBar;
