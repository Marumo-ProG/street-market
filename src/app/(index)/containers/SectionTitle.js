// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Next components
import Link from "next/link";

const SectionTitle = ({ title, href, linkTitle }) => {
    return (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Typography variant="h4">{title}</Typography>
            {href && <Link href={href}>{linkTitle}</Link>}
        </Stack>
    );
};

export default SectionTitle;
