import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 10px;
  z-index: 5;

  ${BaseButton} {
    margin: 0 20px 20px 20px;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 20px 20px 0;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
