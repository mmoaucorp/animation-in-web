import React from "react";
import styled from "styled-components";

const BlockQuoteWrapper = styled.blockquote`
  font-size: ${({ size }) => (size === "small" ? "32px" : "42px")};
  width: 60%;
  margin: 50px auto;
  font-family: Open Sans;
  font-style: italic;
  color: #555555;
  padding: 1.2em 30px 1.2em 75px;
  border-left: 8px solid #78c0a8;
  line-height: 1.6;
  position: relative;

  span {
    display: block;
    color: #333333;
    font-style: normal;
    font-weight: bold;
    margin-top: 1em;
  }
`;

const BlockQuote = ({ text, cite, size }) => {
  return (
    <BlockQuoteWrapper size={size}>
      {text} <span>- {cite}</span>{" "}
    </BlockQuoteWrapper>
  );
};

export default BlockQuote;
