import React from "react";
import { FlexBox } from "spectacle";
import { Image, Text, Heading } from "../ui";
import img from "../images/trigger.jpg";

export default function SlideThirteen() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Heading>1. Trigger</Heading>
      <Text>A trigger initiates the microinteractions.</Text>
      <Image src={img} width="60%" />
    </FlexBox>
  );
}
