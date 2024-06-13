import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #f8f8f8;
  padding: 1rem;
  border-top: 1px solid #e7e7e7;
`;

export const FooterItem = styled.li`
  height: fit-content;

  &:hover {
    background-color: yellow;
  }
`;

export const FooterItemLink = styled(Link)``;
