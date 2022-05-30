import { TextField } from "@mui/material";
import styled from "styled-components";
import { Colors } from "../../../shared/colors";

export const CustomInput = styled(TextField)`
  & .MuiInput-underline,
  .MuiInput-underline:before,
  .MuiInput-underline:after {
    border-bottom-color: ${Colors.primaryTints.tint4};
    border-color: ${Colors.primaryTints.tint4};
    color: ${Colors.primaryTints.tint4};
  }
  & label,
  label.Mui-focused {
    color: ${Colors.primaryTints.tint4};
  }
`;
