"use client";

/* eslint-disable @next/next/no-img-element */
import MyCard from "@/components/molecules/my-card/my-card";
import HeaderTitle from "@/components/atoms/header-title/header-title";
import { Container, Grid } from "@mui/material";

export default function HomeTemplate() {
  return (
    <Container>
      <HeaderTitle
        title="Welcome to my Home Page!"
        subtitle="This is my page"
      />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <MyCard
            title="Card title"
            imageSrc="/assets/dog.jpg"
            content="Some quick example text to build on the card title and make
                    up the bulk of the cards content."
            buttonText="Visit my Project"
            buttonUrl="/about"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <MyCard
            title="Card title 2"
            imageSrc="/assets/woman.jpg"
            content="Some quick example text to build on the card title and make
                    up the bulk of the cards content."
            buttonText="Visit my Other Project"
            buttonUrl="/about"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <MyCard
            title="Card title 3"
            imageSrc="/assets/man.jpg"
            content="Some quick example text to build on the card title and make
                    up the bulk of the cards content."
            buttonText="Visit my Other Project"
            buttonUrl="/about"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
