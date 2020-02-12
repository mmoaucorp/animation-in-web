import React from "react";
import { FlexBox } from "spectacle";
import { Image, Cite } from "../ui";
import img from "../images/earlier_motion.gif";

export default function SlideThree() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Image src={img} />
      <Cite>Shahr-i Sokhta, Iran (in motion)</Cite>
    </FlexBox>
  );
}
