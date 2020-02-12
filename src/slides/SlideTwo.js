import React from "react";
import { FlexBox, Text } from "spectacle";
import { Heading } from "../ui";

export default function SlideTwo() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <FlexBox width="60%" height="100%" flexDirection="column">
        <Text fontSize="monospace">Today's Goal:</Text>
        <FlexBox align="center">
          <Heading fontSize="h2">
            Leave here with a better understanding of{" "}
            <span>Animation in WEB</span>
          </Heading>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
