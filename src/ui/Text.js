import styled, { css } from "styled-components";

export default styled.p`
  && {
    font-weight: ${props => (props.bold ? 500 : 400)};

    ${({ variant }) =>
      variant === "body1"
        ? css`
            font-size: 32px;
          `
        : variant === "body2"
        ? css`
            font-size: 24px;
          `
        : css`
            font-size: 42px;
          `}
  }
`;
