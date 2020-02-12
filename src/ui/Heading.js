import styled from "styled-components";
import { Heading } from "spectacle";
import { theme } from "../styles";

export default styled(Heading)`
  && {
    color: ${theme.colors.primary};

    span {
      color: ${theme.colors.secondary};
    }
  }
`;
