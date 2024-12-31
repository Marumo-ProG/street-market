// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Utils
import { Colors } from "@/common/utils/constants";

const FeatureBlock = ({ title, subtitle, Icon }) => {
    return (
        <Stack spacing={2} alignItems={"center"} direction={"row"}>
            <Icon sx={{ fontSize: 40, color: Colors.black }} />
            <Stack spacing={1}>
                <Typography variant="body" sx={{ color: Colors.black, fontSize: 14 }}>
                    {title}
                </Typography>
                <Typography variant="body" sx={{ color: Colors.black, fontSize: 14 }}>
                    {subtitle}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default FeatureBlock;
