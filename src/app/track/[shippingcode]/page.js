import CustomHeader from "@/components/custom-header";
import ShippingNotFound from "@/components/shipping-not-found";
import { getShipping } from "@/services/shipping";
import { Container, Stack, Typography } from "@mui/material";

export default async function Track({ params }) {
  const shippingCode = (await params).shippingcode;
  const shipping = await getShipping(shippingCode);

  function ShippingTrackingContent() {
    if (shipping) {
      return <></>;
    }

    return <ShippingNotFound />;
  }

  return (
    <>
      <CustomHeader />
      <Stack direction="row">
        <Container>
          <ShippingTrackingContent />
        </Container>
      </Stack>
    </>
  );
}
