import React from "react";
import { render } from "react-dom";
import { Deck, Slide, FlexBox } from "spectacle";
import * as Slides from "./slides";
import { theme, template } from "./styles";
import { Heading, Image, Cite } from "./ui";
import imgVal from "./images/pass_valid.gif";

const Presentation = () => (
  <Deck theme={theme} template={template} progress>
    <Slide>
      <Slides.SlideOne />
    </Slide>
    <Slide>
      <Slides.SlideTwo />
    </Slide>
    <Slide>
      <Slides.SlideThree />
    </Slide>
    <Slide>
      <Slides.SlideFour />
    </Slide>
    <Slide>
      <Slides.SlideFive />
    </Slide>
    <Slide>
      <Slides.SlideSix />
    </Slide>
    <Slide>
      <Slides.SlideSeven />
    </Slide>
    <Slide>
      <Slides.SlideEight />
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Image width="60%" src={imgVal} />
        <Cite>
          Image credit:{" "}
          <a href="https://dribbble.com/shots/7259090-Password-Validation">
            Dribbble
          </a>{" "}
        </Cite>
      </FlexBox>
    </Slide>
    <Slide>
      <Slides.SlideNine />
    </Slide>
    <Slide>
      <Slides.SlideTen />
    </Slide>
    <Slide>
      <Slides.SlideEleven />
    </Slide>
    <Slide>
      <Slides.SlideTwelve />
    </Slide>
    <Slide>
      <Slides.SlideThirteen />
    </Slide>
    <Slide>
      <Slides.SlideFourteen />
    </Slide>
    <Slide>
      <Slides.SlideFifteen />
    </Slide>
    <Slide>
      <Slides.SlideSixteen />
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading variant="h3">
          Here are some more thoughts on Micro-Interactions...
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Slides.SlideSeventeen />
    </Slide>
    <Slide>
      <Slides.SlideEighteen />
    </Slide>
    <Slide>
      <Slides.SlideThankYou />
    </Slide>
  </Deck>
);

render(<Presentation />, document.getElementById("root"));
