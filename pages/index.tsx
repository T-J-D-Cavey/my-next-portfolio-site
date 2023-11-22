import HeroBanner from "@/components/hero/hero-banner";
import Carousel from "@/components/carousel/carousel";
import ProjectList from "@/components/projects/projects-list";
import ContactForm from "@/components/contact/contact-form";
import Footer from "@/components/footer/footer";
export default function Home() {
  return (
    <>
      <HeroBanner />
      <Carousel />
      <ProjectList />
      <ContactForm />
      <Footer />
    </>
  );
}
