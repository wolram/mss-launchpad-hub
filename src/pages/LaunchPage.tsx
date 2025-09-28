import LaunchHeroSection from "@/components/LaunchHeroSection";
import LaunchWhyNowSection from "@/components/LaunchWhyNowSection";
import LaunchSectorsSection from "@/components/LaunchSectorsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const LaunchPage = () => {
  return (
    <div className="min-h-screen">
      <LaunchHeroSection />
      <LaunchWhyNowSection />
      <LaunchSectorsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LaunchPage;