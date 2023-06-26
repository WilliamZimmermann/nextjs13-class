import ProjectsTemplate from "@/components/templates/projects-template/projects-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Page",
  description: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsTemplate />
    </>
  );
}
