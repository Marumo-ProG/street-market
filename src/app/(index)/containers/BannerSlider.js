"use client";

// MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// Components
import Slider from "../components/Slider";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Utils
import { Colors } from "@/common/utils/constants";

const BannerSlider = () => {
    return (
        <Stack sx={{ display: "grid", gridTemplateColumns: "8% auto 8%", gridTemplateRows: "1fr" }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop
                // navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                style={{ display: "block", width: "100%", gridColumn: "2/3", gridRow: "1" }}
            >
                <SwiperSlide>
                    <Slider
                        title={"Start Selling on Street Market Today"}
                        subtitle={
                            "List up to <b>5 items</b> for free and join online streets today"
                        }
                        buttonTitle={"Start Selling"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider
                        title={"Find the Best, Close and Reliable Deals on Street Market"}
                        subtitle={"Find the people selling on your street and around you"}
                        buttonTitle={"Start Buying"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider
                        title={"Online Payments for Smooth and Fast Transactions"}
                        subtitle={"Pay online and get your items"}
                        buttonTitle={"Start Selling"}
                    />
                </SwiperSlide>
            </Swiper>
        </Stack>
    );
};

export default BannerSlider;
