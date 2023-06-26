import AboutTemplate from "@/components/templates/about-template/about-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About",
};

export default function AboutPage() {
  return (
    <>
      <AboutTemplate />
    </>
  );
}
