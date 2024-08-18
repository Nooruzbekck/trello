import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { HeaderTrelloLogo, Icons } from "../assets";
import { ReusableMenu } from "../components/UI/Menu";
import { Button } from "../components/UI/Button";
import { IconButton } from "../components/UI/IconButton";
import { useNavigate } from "react-router-dom";
import { SearchInput } from "../components/UI/SearchInput";
import { RootState } from "../redux";
import { LoginData } from "../types/auth";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Header = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const { data } = useSelector((state: RootState) => state.auth) as {
    data: LoginData;
  };
  const [selectedValue, setSelectedValue] = useState<string>("");
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSelectChange = (id: string) => {
    setSelectedValue(id);
    console.log("Selected Value:", id);
  };

  const renderReusableMenu = (text: string) => (
    <ReusableMenu
      text={text}
      options={[
        { id: "option1", label: "Option 1" },
        { id: "option2", label: "Option 2", disabled: true },
      ]}
      onSelect={handleSelectChange}
      Icon={<Icons.ArrowDown />}
    />
  );

  return (
    <StyledHeader>
      <Wrapper>
        <Icons.CategoryIcon />
        <ImageLogo
          src={HeaderTrelloLogo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <FirstBlock isMobile={isMobile}>
          {isMobile ? (
            <>
              {renderReusableMenu("Рабочие пространства")}
              {renderReusableMenu("Недавние")}
              {renderReusableMenu("В избранном")}
              {renderReusableMenu("Шаблоны")}
              <Button type="button">Создать</Button>
            </>
          ) : (
            <>
              {renderReusableMenu("Больше")}
              <IconButton Icon={Icons.PlusIcon} />
            </>
          )}
        </FirstBlock>
      </Wrapper>
      <SecondBlock isMobile={isMobile}>
        {isMobile ? (
          <StyledSearchInput
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            placeholder="Поиск"
          />
        ) : (
          <Icons.SearchIcon />
        )}
        <Icons.NotificationIcon />
        <Icons.QuestionIcon />

        <StyledIconButton>
          <IconButton onClick={handleOpenUserMenu}>
            <StyledAvatar
              alt={data.data.email?.[0]}
              src="/static/images/avatar/2.jpg"
            />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </StyledIconButton>
      </SecondBlock>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")({
  width: "100%",
  height: "58px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#1d2125",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
  padding: "0 20px",

  svg: {
    width: "25px",
    height: "25px",
    fill: "#626F86",
    cursor: "pointer",
  },
});

const StyledIconButton = styled(Box)({
  button: {
    border: "none",
    "&:hover": {
      border: "none",
    },
  },
});

const StyledAvatar = styled(Avatar)({
  width: "30px",
  height: "30px",
  cursor: "pointer",
  fontSize: "14px !important",
  background: "red",
});

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "15px",

  img: {
    cursor: "pointer",
  },
});

const FirstBlock = styled("div")<any>(({ theme, isMobile }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "center",

  "& > button": {
    color: "#000",
    padding: "4px 13px",
    fontSize: "14px",
    fontWeight: "500",
    borderRadius: "4px",
    background: "#579dff",
    textTransform: "capitalize",

    ":hover": {
      background: "#85B8FF",
    },
  },

  button: {
    [theme.breakpoints.down("md")]: {
      padding: isMobile ? "10px 0" : "0",
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const ImageLogo = styled("img")({
  width: "80px",
  height: "17px",
});

const SecondBlock = styled("div")<any>(({ theme, isMobile }) => ({
  display: "flex",
  alignItems: "center",
  gap: isMobile ? "15px" : "10px",
}));

const StyledSearchInput = styled(SearchInput)({
  width: "180px",
  height: "30px",
  "& .MuiInputBase-root": {
    color: "#8590A2",
    paddingLeft: "0",
    "& ::placeholder": {
      color: "#f5f6f7",
    },
  },
  svg: {
    width: "18px",
    padding: "0",
  },

  "& .MuiButtonBase-root": {
    paddingLeft: "0",
    fill: "#8590A2",
  },
});
