import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import shippingBannerImage from "../../../public/images/shipping-banner.jpg";

export default function BannerCreateShipping() {
	return (
		<Link href="/new-shipping" id="banner-create-shipping">
			<Box>
				<Image id="banner-image" src={shippingBannerImage} fill />
				<Typography id="banner-text">Create a shipping</Typography>
			</Box>
		</Link>
	);
}
