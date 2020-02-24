import React from "react";
import { FlexBox, OrderedList, Box, ListItem, Grid } from "spectacle";
import { Heading, Text, Image, Cite, Wrapper } from "../ui";
import gifImg from "../images/logo-animation.gif";
import flashImg from "../images/flash.gif";

export default function SlideFive() {
  return (
    <FlexBox alignItems="center" height="100%">
      <Wrapper flex alignItems="center" p={4}>
        <Heading variant="h2">Web Animation</Heading>
        <Box margin="0 20">
          <Text>Phase 1</Text>
          <OrderedList>
            <ListItem>Graphics Interchange Format</ListItem>
            <ListItem>Macromedia’s/Adobe’s Flash</ListItem>
          </OrderedList>
        </Box>
      </Wrapper>
      <Wrapper flex alignItems="center" p={4}>
        <FlexBox height="100%" flexDirection="column">
          <Image src={gifImg} width={300} />
          <Cite>First Gif introduced by CompuServe in 80s</Cite>
        </FlexBox>
        <FlexBox height="100%" flexDirection="column">
          <Image src={flashImg} width={300} />
          <Cite>Flash</Cite>
        </FlexBox>
      </Wrapper>
    </FlexBox>
  );
}
