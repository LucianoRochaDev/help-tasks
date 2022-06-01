import { mdiAccountCircle, mdiLogoutVariant, mdiTableAccount } from "@mdi/js";
import Icon from "@mdi/react";
import {
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Colors } from "../../shared/colors";
import * as S from "./styles";

const ToolbarTodoList = () => {
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    null
  );

  const { user, Logout } = useContext(UserContext);

  const openProfile = Boolean(anchorElement);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const fecharProfileMenu = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <S.Header>
        <S.LogoText>HelpTasks</S.LogoText>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginRight="22px"
        >
          {/* <BotaoLogout onLogout={onLogout} /> */}
          <IconButton onClick={handleClick}>
            {user && user.profilePhoto ? (
              <Avatar alt="" src={user.profilePhoto} />
            ) : (
              <Avatar
                alt=""
                src={mdiAccountCircle}
                sx={{ backgroundColor: Colors.primaryTints.tint2 }}
              />
            )}
          </IconButton>
        </Box>
      </S.Header>
      <Menu
        anchorEl={anchorElement}
        open={openProfile}
        onClose={fecharProfileMenu}
        onClick={fecharProfileMenu}
      >
        <MenuItem onClick={Logout}>
          <ListItemIcon>
            <Icon
              path={mdiTableAccount}
              size={1}
              color={Colors.primaryTints.tint1}
            />
          </ListItemIcon>
          Histórico
        </MenuItem>
        <MenuItem onClick={Logout}>
          <ListItemIcon>
            <Icon
              path={mdiLogoutVariant}
              size={1}
              color={Colors.social.google}
            />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default ToolbarTodoList;
