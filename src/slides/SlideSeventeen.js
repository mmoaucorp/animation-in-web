import React from "react";
import { FlexBox } from "spectacle";
import { Image, Cite, BlockQuote, Wrapper } from "../ui";
import img from "../images/mirco-example-1.gif";

export default function SlideSeventeen() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <FlexBox>
        <Wrapper flex alignItems="center" p={4}>
          <BlockQuote
            size="small"
            text="Microinteractions can save users’ time by instantly communicating information in a way that doesn’t bore or distract the user. They should catch the user’s attention briefly and then fade away."
          />
        </Wrapper>
        <Wrapper flex alignItems="center" p={4}>
          <Image src={img} />
          <Cite>Image src: Invisionapp</Cite>
        </Wrapper>
      </FlexBox>
    </FlexBox>
  );
}
