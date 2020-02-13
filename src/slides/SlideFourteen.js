import React from "react";
import { FlexBox } from "spectacle";
import { Image, Text, Heading } from "../ui";
import img from "../images/rules.jpg";

export default function SlideThirteen() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Heading>2. Rule</Heading>
      <Text>
        A rule determines how a microinteraction responds to a trigger and
        defines what happens during the interaction
      </Text>
      <Image src={img} width="60%" />
    </FlexBox>
  );
}
