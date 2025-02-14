import CustomHeader from "@/components/custom-header";
import CustomSideBar from "@/components/custom-side-bar";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <CustomHeader />
      <Stack direction="row" className="main-stack">
        <CustomSideBar />
      </Stack>
    </>
  );
}
