import { Button as MUIButton } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 25px;
`;

export const Button = styled(MUIButton)`
  width: 150px;
  height: 40px;
`;
