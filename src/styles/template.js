import React from "react";
import { Box, FlexBox, FullScreen, Progress } from "spectacle";

export default () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress type="number" progressColor="primary" />
    </Box>
  </FlexBox>
);
