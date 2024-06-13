import React, { useState } from "react";
import { FooterContainer, FooterItem, FooterItemLink } from "./Footer.style";
import { useDispatch, useSelector } from "react-redux";
import {
  isCookiesSelector,
  isGeneralPoliciesSelector,
  isNotificationsSelector,
} from "../store/selectors/footerSelectors";
import { COOKIES, GENERAL_POLICIES, NOTIFICATIONS } from "../constants/keys";
import { toggleCheckboxElement } from "../store/actions/footerAction";

const Footer = () => {
  const dispatch = useDispatch();

  const isCookies = useSelector(isCookiesSelector);
  const isNotifications = useSelector(isNotificationsSelector);
  const isGeneralPolicies = useSelector(isGeneralPoliciesSelector);

  const handleToggleCheckbox = (event) => {
    dispatch(toggleCheckboxElement(event.target.name));
  };

  return (
    <FooterContainer>
      <FooterItem>
        <FooterItemLink to="/cookies">Cookies</FooterItemLink>
        <input
          type="checkbox"
          name={COOKIES}
          checked={isCookies}
          onChange={handleToggleCheckbox}
        />
      </FooterItem>
      <FooterItem>
        <FooterItemLink to="/notifications">Notifications</FooterItemLink>
        <input
          type="checkbox"
          name={NOTIFICATIONS}
          checked={isNotifications}
          onChange={handleToggleCheckbox}
        />
      </FooterItem>
      <FooterItem>
        <FooterItemLink to="/general-policies">General Policies</FooterItemLink>
        <input
          type="checkbox"
          name={GENERAL_POLICIES}
          checked={isGeneralPolicies}
          onChange={handleToggleCheckbox}
        />
      </FooterItem>
    </FooterContainer>
  );
};

export default Footer;
