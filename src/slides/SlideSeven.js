import React from "react";
import { FlexBox, OrderedList, Box, ListItem } from "spectacle";
import { Heading, Text } from "../ui";

export default function SlideSeven() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Heading variant="h2">Web Animation</Heading>
      <Box margin="0 20">
        <Text>Phase 2</Text>
        <OrderedList>
          <ListItem>CSS3</ListItem>
          <ListItem>Javascript</ListItem>
          <ListItem>WAAPI (Web Animations API)</ListItem>
        </OrderedList>
      </Box>
    </FlexBox>
  );
}
