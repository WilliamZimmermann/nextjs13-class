"use client";

import HeaderTitle from "@/components/atoms/header-title/header-title";
import Card from "@/components/molecules/my-card/my-card";
import { Box, Container } from "@mui/material";

export default function ProjectsTemplate() {
  return (
    <Container>
      <HeaderTitle title="Projects" subtitle="Take a look at my projects" />
      <Box className="container">
        <Box className="row">
          <Box className="col-4">
            <Card
              title="Project 1"
              imageSrc="/assets/dog.jpg"
              content="Some quick example text to build on the card title and make
                    up the bulk of the cards content."
              buttonText="Visit my Project"
              buttonUrl="/projects/1"
            />
          </Box>
          <Box className="col-4">
            <Card
              title="Project 2"
              imageSrc="/assets/woman.jpg"
              content="Some quick example text to build on the card title and make
                    up the bulk of the cards content."
              buttonText="Visit my Other Project"
              buttonUrl="/projects/2"
            />
          </Box>
          <Box className="col-4">
            <Card
              title="Project 3"
              imageSrc="/assets/man.jpg"
              content="Some quick example text to build on the card title and make
                    up the bulk of the cards content."
              buttonText="Visit my Other Project"
              buttonUrl="/projects/3"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
