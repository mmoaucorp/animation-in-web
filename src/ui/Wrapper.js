import styled, { css } from "styled-components";
import {
  palette,
  space,
  layout,
  borders,
  flexbox,
  display
} from "styled-system";
import { theme } from "../styles";

const Wrapper = styled.div`
  background-color: ${({ bgColor }) =>
    bgColor === "default"
      ? "#ffffff"
      : bgColor === "quaternary"
      ? theme.colors.quaternary
      : bgColor === "tertiary"
      ? theme.colors.tertiary
      : bgColor === "primary"
      ? theme.colors.primary
      : bgColor === "secondary"
      ? theme.colors.secondary
      : ""};

  ${({ bgImage }) =>
    bgImage
      ? css`
          background: url(${bgImage}) no-repeat center center;
          background-size: cover;
        `
      : ""};

  ${({ card }) =>
    card &&
    css`
      transition: box-shadow 0.3s ease-in-out;

      :hover {
        box-shadow: 2px 3px 13px
          ${props => props.theme.palette.primary.main + "40"};
        cursor: pointer;
      }
    `}

  ${space};
  ${layout};
  ${borders};
  ${flexbox};
`;

export default Wrapper;
