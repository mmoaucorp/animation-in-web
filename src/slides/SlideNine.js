import React from "react";
import { FlexBox } from "spectacle";
import { Cite, Image } from "../ui";
import img from "../images/password_validation.gif";

export default function SlideNine() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Image width="60%" src={img} />
      <Cite>
        Image credit:{" "}
        <a href="https://dribbble.com/shots/7259090-Password-Validation">
          Dribbble
        </a>{" "}
      </Cite>
    </FlexBox>
  );
}
