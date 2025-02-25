"use client";
import { useRouter } from "next/navigation";
import "./style.css";
import { Card, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function BannerTrackShipping() {
	const router = useRouter();
	const [shippingCode, setShippingCode] = useState("");

	function handlerSearchShipping() {
		router.push(`/track/${shippingCode}`);
	}

	return (
		<Card variant="outlined" id="banner-track-shipping">
			<TextField
				id="input-shipping-code"
				label="Shipping Code"
				size="small"
				variant="outlined"
				type="number"
				value={shippingCode}
				onChange={(event) => {
					setShippingCode(event.target.value);
				}}
			/>
			<Button variant="contained" onClick={handlerSearchShipping}>
				Search
			</Button>
		</Card>
	);
}
