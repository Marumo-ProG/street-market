// "user client";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Components
import SocialNavbar from "../common/components/SocialNavbar";
import SearchBarNav from "../common/components/SearchBarNav";
import CategoryBar from "../common/components/CategoryBar";

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
                <SearchBarNav />
                <CategoryBar />
                {children}
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
