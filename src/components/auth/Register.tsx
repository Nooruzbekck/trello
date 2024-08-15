import React, { useState } from "react";
import { Input } from "../UI/Input";
import { styled } from "@mui/material";
import { Button } from "../UI/Button";
import { IconButton } from "../UI/IconButton";
import { Icons, LogoTrello } from "../../assets";

export const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  return (
    <Form>
      <ContianerLogo>
        <ImageLogo src={LogoTrello} alt="" />
        <Title>Зарегистрируйтесь, чтобы продолжить</Title>
      </ContianerLogo>
      <Input
        type="email"
        placeholder="Введите адрес электронной почты"
        onChange={(e) => setUserEmail(e.target.value)}
        value={userEmail}
      />
      <Button type="button">Зарегистрироваться</Button>

      <ContainerSecond>
        <OrText>Или продолжить с помощью:</OrText>

        <IconButton Icon={Icons.GoogleIcon}>Google</IconButton>
        <IconButton Icon={Icons.MicorsoftIcon}>Micorsoft</IconButton>
        <IconButton Icon={Icons.AppleIcon}>Apple</IconButton>
        <IconButton Icon={Icons.SlackIcon}>Slack</IconButton>

        <NavigationWrapper>
          <a href="/">Уже есть аккаунт Atlassian?</a>
          <a href="/">Войти</a>
        </NavigationWrapper>
      </ContainerSecond>
    </Form>
  );
};

const Form = styled("form")({
  width: "450px",
  height: "fit-content",
  padding: "32px 40px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  webkitBoxShadow: "0px 1px 8px 0px rgba(34, 60, 80, 0.2)",
  mozBoxShadow: "0px 1px 8px 0px rgba(34, 60, 80, 0.2)",
  boxShadow: "0px 1px 8px 0px rgba(34, 60, 80, 0.2)",
  borderRadius: "10px",
  zIndex: "10",
});

const ContianerLogo = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",
});

const Title = styled("p")({
  fontSize: "16px",
  fontWeight: "600",
  color: "#172b4d",
  marginTop: "15px",
});

const ImageLogo = styled("img")({
  width: "110px",
  height: "24px",
});

const ContainerSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  borderBottom: "1px solid",
  paddingBottom: "15px",
});

const OrText = styled("p")({
  textAlign: "center",
  color: "rgb(94, 108, 132)",
  fontSize: "14px",
  fontWeight: "600",
});

const NavigationWrapper = styled("div")({
  display: "flex",
  gap: "10px",
  justifyContent: "space-between",
  margin: "10px",

  a: {
    color: "#0c66e4",
    textDecoration: "none",
    textAlign: "center",
  },
});
