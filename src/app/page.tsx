import { Hero } from "@/components/home/hero";
import { Values } from "@/components/home/values";
import { Welcome } from "@/components/home/welcome";
import { ServicesPreview } from "@/components/home/services-preview";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { Reviews } from "@/components/home/reviews";
import { Visit } from "@/components/home/visit";

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Welcome />
      <ServicesPreview />
      <GalleryPreview />
      <Reviews />
      <Visit />
    </>
  );
}
