import Icon from "@mdi/react";
import { IconButton } from "@mui/material";
import React from "react";
import { Colors } from "../../shared/colors";

interface Props {
  path: string;
}

const ItemIconButton = ({ path }: Props) => {
  return (
    <IconButton
      size="small"
      sx={{
        height: "38px",
        width: "38px",
      }}
    >
      <Icon path={path} size={0.9} color={Colors.primaryTints.tint4} />
    </IconButton>
  );
};

export default ItemIconButton;
