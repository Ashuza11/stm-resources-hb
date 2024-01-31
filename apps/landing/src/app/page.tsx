import AppSection from "@/components/AppSection";
import CourseSection from "@/components/CourseSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import MathSection from "@/components/MathSection";

const HomePage = () => {
    return (
        <div>
            <HeroSection />

            <MathSection />

            <CourseSection />

            <AppSection />

            <FooterSection />
        </div>
    );
};

export default HomePage;
