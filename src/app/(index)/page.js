// MUI
import Stack from "@mui/material/Stack";

// Components
import BannerSlider from "./containers/BannerSlider";
import FeatureList from "./components/FeatureList";

// Utils
import { PageGutter } from "@/common/utils/constants";

export default function Home() {
    return (
        <Stack spacing={3} sx={{ px: PageGutter, py: 2 }}>
            <BannerSlider />
            <FeatureList />
        </Stack>
    );
}
