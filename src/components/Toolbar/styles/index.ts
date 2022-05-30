import styled from "styled-components";
import { Colors } from "../../../shared/colors";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.primary};
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  padding: 0 18px;
  font-size: 26px;
  font-family: "Love Ya Like A Sister", cursive;
  color: white;
`;
