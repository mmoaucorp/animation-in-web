import React from "react";
import { FlexBox } from "spectacle";
import { Image, Text, Heading } from "../ui";
import img from "../images/feeback.png";

export default function SlideThirteen() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Heading>3. Feedback</Heading>
      <Text>
        Feedback tells the user what is happening during the microinteraction.
      </Text>
      <Image src={img} width="60%" />
    </FlexBox>
  );
}
