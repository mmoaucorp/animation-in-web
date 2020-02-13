import React from "react";
import { FlexBox } from "spectacle";
import { Image } from "../ui";
import img from "../images/thank-you.jpg";

export default function SlideThankYou() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Image src={img} width="60%" />
    </FlexBox>
  );
}
