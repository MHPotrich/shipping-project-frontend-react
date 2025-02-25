import { Container } from "@mui/material";

export default function ShippingTrackDetails({ shipping }) {
	return (
		<Container>
			<h1>{shipping.shippingCode}</h1>
			<span>Seller id: {shipping.sendedBy}</span>
			<span>Destination: {shipping.destination}</span>

			<div>
				{shipping.locationHistory &&
					shipping.locationHistory.map((location) => {
						<div></div>;
					})}
			</div>
		</Container>
	);
}
