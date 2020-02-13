import styled, { css } from "styled-components";
import { theme } from "../styles";

export default styled.h1`
  && {
    color: ${theme.colors.primary};
    padding: 0;
    font-weight: 600;
    text-align: ${({ align }) => (align ? align : "center")};
    margin: 16px 16px 24px;

    ${({ variant }) =>
      variant === "h1"
        ? css`
            font-size: 72px;
          `
        : variant === "h2"
        ? css`
            font-size: 56px;
          `
        : css`
            font-size: 48px;
          `}

    span {
      color: ${theme.colors.secondary};
    }
  }
`;
