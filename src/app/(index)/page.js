// MUI
import Stack from "@mui/material/Stack";

// Components
import BannerSlider from "./containers/BannerSlider";

// Utils
import { PageGutter } from "@/common/utils/constants";

export default function Home() {
    return (
        <Stack sx={{ px: PageGutter, py: 2 }}>
            <BannerSlider />
        </Stack>
    );
}
