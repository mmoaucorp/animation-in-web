import React from "react";
import { FlexBox } from "spectacle";
import { Heading, Text } from "../ui";

export default function SlideTwo() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <FlexBox width="60%" height="100%" flexDirection="column">
        <Text variant="body2">Today's Goal:</Text>
        <FlexBox align="center">
          <Heading variant="h2">
            Leave here with a better understanding of{" "}
            <span>Animation in WEB</span>
          </Heading>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
