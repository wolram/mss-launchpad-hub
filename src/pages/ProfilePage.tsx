import ProfileHero from "@/components/ProfileHero";
import ProfileAbout from "@/components/ProfileAbout";
import ProfileExpertise from "@/components/ProfileExpertise";
import ProfileVentures from "@/components/ProfileVentures";
import ProfileEducation from "@/components/ProfileEducation";
import ProfileCTA from "@/components/ProfileCTA";
import Footer from "@/components/Footer";

const ProfilePage = () => {
  return (
    <div className="min-h-screen">
      <ProfileHero />
      <ProfileAbout />
      <ProfileExpertise />
      <ProfileVentures />
      <ProfileEducation />
      <ProfileCTA />
      <Footer />
    </div>
  );
};

export default ProfilePage;
