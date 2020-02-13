import React from "react";
import { FlexBox } from "spectacle";
import { Image, Cite, BlockQuote, Wrapper } from "../ui";
import img from "../images/mirco-example-2.gif";

export default function SlideEighteen() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <FlexBox>
        <Wrapper flex alignItems="center" p={4}>
          <BlockQuote
            size="small"
            text="Successful microinteractions are only slightly noticeable before they fade away. Just like good animation is invisible, you shouldn’t notice a microinteraction. They should be small and simple."
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
