import HomeTemplate from "@/components/templates/home-template/home-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home",
};

export default function HomePage() {
  return (
    <>
      <HomeTemplate />
    </>
  );
}
