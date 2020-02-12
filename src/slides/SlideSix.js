import React from "react";
import { FlexBox } from "spectacle";
import { Image, Cite } from "../ui";
import img from "../images/apple-vs-adobe.jpg";

export default function SlideSix() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Image src={img} />
      <Cite>
        Image credit:{" "}
        <a href="http://russdesigns.com/tag/apple/">Russdesigns</a>{" "}
      </Cite>
    </FlexBox>
  );
}
