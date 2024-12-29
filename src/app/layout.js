// "user client";
import "./globals.css";

// Components
import SocialNavbar from "../common/components/SocialNavbar";

// Theming
import { ThemeProvider } from "@mui/material/styles";
import theme from "../common/context/ThemeContext";

export const metadata = {
    title: "Street Market",
    description: "Build by Lenny Thobejane, a full-stack developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* <ThemeProvider theme={theme}> */}
                <SocialNavbar />
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
