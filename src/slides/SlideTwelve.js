import React from "react";
import { FlexBox } from "spectacle";
import { Image, Cite, Heading } from "../ui";
import img from "../images/microinteraction-rule.jpg";

export default function SlideTwelve() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Heading>Effective Micro-interactions should follow 4 step</Heading>
      <Image src={img} width="80%" />
      <Cite>Image src: Medium</Cite>
    </FlexBox>
  );
}
