import React from "react";
import { FlexBox } from "spectacle";
import { Image, Text, Heading } from "../ui";
import img from "../images/loops.jpg";

export default function SlideThirteen() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Heading>4. Loops and Modes</Heading>
      <Text>
        Loops and modes define the microinteraction’s meta-rules and how the
        microinteraction changes when used repeatedly
      </Text>
      <Image src={img} width="60%" />
    </FlexBox>
  );
}
