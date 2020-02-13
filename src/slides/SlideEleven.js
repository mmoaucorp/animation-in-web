import React from "react";
import { FlexBox } from "spectacle";
import { BlockQuote } from "../ui";

export default function SlideEleven() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <BlockQuote
        text="Micro-interactions are contained product moments that revolve around a
          single use case — they have one main task"
        cite="Dan Saffer"
      />
    </FlexBox>
  );
}
