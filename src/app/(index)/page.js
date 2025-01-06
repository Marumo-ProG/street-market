// MUI
import Stack from "@mui/material/Stack";

// Components
import BannerSlider from "./containers/BannerSlider";
import FeatureList from "./components/FeatureList";
import SectionTitle from "./containers/SectionTitle";
import VendorBlock from "./containers/VendorBlock";

// Utils
import { PageGutter } from "@/common/utils/constants";

// Images
import testImage from "@/assets/images/streetking.jpg";

export default function Home() {
    return (
        <Stack spacing={4} sx={{ px: PageGutter, py: 2 }}>
            <BannerSlider />
            <FeatureList />
            <Stack spacing={3}>
                <SectionTitle title="Popular Vendors" />
                <Stack spacing={2} direction="row" alignItems={"center"}>
                    <VendorBlock
                        username="Street King 2000"
                        subtitle="I sell SWAG, get HIGH quality swag from me"
                        image={testImage}
                        orders={233}
                        likes={1}
                    />
                </Stack>
            </Stack>
        </Stack>
    );
}
