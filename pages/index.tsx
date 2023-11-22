import HeroBanner from "@/components/hero/hero-banner";
import Carousel from "@/components/carousel/carousel";
import ProjectList from "@/components/projects/projects-list";
import ContactForm from "@/components/contact/contact-form";
export default function Home() {
  return (
    <>
      <HeroBanner />
      <Carousel />
      <ProjectList />
      <ContactForm />
    </>
  );
}
