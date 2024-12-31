// MUI
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

// Components
import FeatureBlock from "./FetureBlock";

// Utils
import { Colors, PageGutter } from "@/common/utils/constants";

// Icons
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";

const FeatureList = () => {
    return (
        <Stack
            p={2}
            sx={{
                border: "1px solid " + Colors.greyStroke,
            }}
            spacing={2}
            direction={"row"}
            justifyContent={"space-between"}
        >
            <FeatureBlock
                Icon={TakeoutDiningOutlinedIcon}
                title={"FREE SHIPPING"}
                subtitle={"On all orders over $100"}
            />
            <Divider orientation="vertical" sx={{ height: "100%" }} />
            <FeatureBlock
                Icon={EmojiEventsOutlinedIcon}
                title={"24 HOURS RETURN"}
                subtitle={"100% money-back guarantee"}
            />
            <FeatureBlock
                Icon={CreditCardOutlinedIcon}
                title={"SECURE PAYMENTS"}
                subtitle={"Your money is safe, so is your data"}
            />
            <FeatureBlock
                Icon={HeadphonesOutlinedIcon}
                title={"SUPPORT 24/7"}
                subtitle={"Live contact/message"}
            />
        </Stack>
    );
};

export default FeatureList;
