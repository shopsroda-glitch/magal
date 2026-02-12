import { Header } from "@/components/magalu/header"
import { Breadcrumb } from "@/components/magalu/breadcrumb"
import { ProductImage } from "@/components/magalu/product-image"
import { ProductInfo } from "@/components/magalu/product-info"
import { PriceSection } from "@/components/magalu/price-section"
import { ShippingSection } from "@/components/magalu/shipping-section"
import { CtaButtons } from "@/components/magalu/cta-buttons"
import { GuaranteeSection } from "@/components/magalu/guarantee-section"
import { DescriptionSection } from "@/components/magalu/description-section"
import { ReviewsSection } from "@/components/magalu/reviews-section"
import { LuExplicaSection } from "@/components/magalu/lu-explica-section"
import { Footer } from "@/components/magalu/footer"
import { StickyBar } from "@/components/magalu/sticky-bar"

export default function Page() {
  return (
    <div className="mx-auto max-w-md bg-[#F5F5F5] min-h-screen relative">
      <Header />
      <main>
        <Breadcrumb />
        <ProductImage />
        <ProductInfo />
        <PriceSection />
        <ShippingSection />
        <CtaButtons />
        <GuaranteeSection />
        <DescriptionSection />
        <ReviewsSection />
        <LuExplicaSection />
      </main>
      <Footer />
      <StickyBar />
    </div>
  )
}
