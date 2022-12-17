import React from "react";
import { useTranslation } from "react-i18next";
import { FooterBox } from "./index.styled";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterBox>
      <small>{t("footer.copyright")}</small>
    </FooterBox>
  );
};

export default Footer;
