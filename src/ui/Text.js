import styled from "styled-components";
import { Text } from "spectacle";

export default styled(Text)`
  && {
    font-weight: ${props => (props.bold ? 600 : 400)};
  }
`;
