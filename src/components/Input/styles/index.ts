import { TextField } from "@mui/material";
import styled from "styled-components";
import { Colors } from "../../../shared/colors";

export const DarkInput = styled(TextField)`
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

export const LightInput = styled(TextField)`
  & .MuiInput-underline,
  .MuiInput-underline:before,
  .MuiInput-underline:after {
    border-bottom-color: ${Colors.black};
    border-color: ${Colors.black};
    color: ${Colors.black};
  }
  & label,
  label.Mui-focused {
    color: ${Colors.black};
    font-weight: 500;
  }
`;
