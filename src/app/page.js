import BannerCreateShipping from "@/components/banner-create-shipping";
import BannerTrackShipping from "@/components/banner-track-shipping";
import CustomHeader from "@/components/custom-header";
import CustomSideBar from "@/components/custom-side-bar";
import { Container, Stack } from "@mui/material";

export default function Home() {
	return (
		<>
			<CustomHeader />
			<Stack direction="row" className="main-stack">
				<Container>
					<BannerCreateShipping />
					<BannerTrackShipping />
				</Container>
			</Stack>
		</>
	);
}
