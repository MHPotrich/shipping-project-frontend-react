import CustomHeader from "@/components/custom-header";
import ShippingNotFound from "@/components/shipping-not-found";
import ShippingTrackDetails from "@/components/shipping-track-details";
import { getShipping } from "@/services/shipping";
import { Container, Stack, Typography } from "@mui/material";

export default async function Track({ params }) {
  const shippingCode = (await params).shippingcode;
  const shipping = (await getShipping(shippingCode)).data;

  function ShippingTrackingContent() {
    if (shipping) {
      return <ShippingTrackDetails shipping={shipping} />;
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
