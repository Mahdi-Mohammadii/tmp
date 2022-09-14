import React from "react";
import { Section, Img, Title, Description } from "./style";

const TopSection = () => {
  return (
    <Section>
      <Img src="/assets/assets_1.svg" alt="assets" />
      <Title>Tools for Designer, Developer, and Business Owner</Title>
      <Description>
        Information about the latest and most popular design and developer tools
        around the world.
      </Description>
    </Section>
  );
};

export default TopSection;
