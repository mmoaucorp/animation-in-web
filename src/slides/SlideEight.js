import React from "react";
import { FlexBox, ListItem, UnorderedList } from "spectacle";
import { Heading } from "../ui";

export default function SlideEight() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Heading variant="h2">Why ANIMATION?</Heading>
      <UnorderedList>
        <ListItem>Create eye-catching fancy website</ListItem>
        <ListItem>Make complex process simple</ListItem>
        <ListItem style={{ color: "#59ABE3" }}>Better UX</ListItem>
      </UnorderedList>
    </FlexBox>
  );
}
