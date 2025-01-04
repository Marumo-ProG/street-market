// MUI
import Stack from "@mui/material/Stack";

// Components
import BannerSlider from "./containers/BannerSlider";
import FeatureList from "./components/FeatureList";
import SectionTitle from "./containers/SectionTitle";

// Utils
import { PageGutter } from "@/common/utils/constants";

export default function Home() {
    return (
        <Stack spacing={4} sx={{ px: PageGutter, py: 2 }}>
            <BannerSlider />
            <FeatureList />
            <Stack spacing={3}>
                <SectionTitle title="Popular Vendors" />
            </Stack>
        </Stack>
    );
}
