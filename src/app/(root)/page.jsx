import CategoriesSection from "@/components/modules/home/CategoriesSection";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import TechShopBanner from "@/components/modules/home/TechShopBanner";
import WhyChooseUs from "@/components/modules/home/WhyChooseUs";
import FAQSection from "@/components/modules/home/FAQSection";
import ReviewsSection from "@/components/modules/home/ReviewsSection";

export default function Home() {
  return (
    <div className="max-w-360 mx-auto ">
      <TechShopBanner />
      <FeaturedProducts/>
      <CategoriesSection/>
      <WhyChooseUs/>
      <ReviewsSection/>
      <FAQSection/>
    </div>
  );
}
