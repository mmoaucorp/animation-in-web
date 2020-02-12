import React from "react";
import { FlexBox, OrderedList, Box, ListItem, Grid } from "spectacle";
import { Heading, Text, Image, Cite } from "../ui";
import gifImg from "../images/logo-animation.gif";

export default function SlideFive() {
  return (
    <Grid
      gridTemplateColumns="1fr 1fr"
      gridTemplateRows="1fr"
      alignItems="center"
      justifyContent="center"
      gridRowGap={15}
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h1">Web Animation</Heading>
        <Box margin="0 20">
          <Text fontSize="h3" bold>
            Phase 1
          </Text>
          <OrderedList>
            <ListItem>Graphics Interchange Format</ListItem>
            <ListItem>Macromedia’s/Adobe’s Flash Flash</ListItem>
          </OrderedList>
        </Box>
      </FlexBox>
      <FlexBox>
        <Grid
          gridTemplateColumns="1fr"
          gridTemplateRows="1fr 1fr"
          alignItems="center"
          justifyContent="center"
          gridRowGap={15}
        >
          <FlexBox height="100%" flexDirection="column">
            <Image src={gifImg} />
            <Cite>Gif</Cite>
          </FlexBox>
          <FlexBox height="100%" flexDirection="column">
            <Image src={gifImg} />
            <Cite>Flash</Cite>
          </FlexBox>
        </Grid>
      </FlexBox>
    </Grid>
  );
}
