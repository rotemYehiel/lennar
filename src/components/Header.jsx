import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsSelector } from "../store/selectors/headerSelectors";
import { getUserDeatails } from "../store/actions/headerAction";
import { Details, Logo, UserDetails } from "./Header.style";
import logo from "../assets/dog_logo.png";
import LanguageDropdown from "./LanguageDropdown";
import Feedback from "./Feedback";

const Header = () => {
  const dispatch = useDispatch();

  const userDetails = useSelector(userDetailsSelector);

  useEffect(() => {
    if (!userDetails) {
      dispatch(getUserDeatails());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails]);

  if (!userDetails) return null;

  return (
    <div>
      <UserDetails>
        <Logo src={logo} alt="Logo" />
        <Details>
          <h2>User name: {userDetails.username}</h2>
          <h2>Professional: {userDetails.professional}</h2>
        </Details>
      </UserDetails>
      <LanguageDropdown />
      <Feedback />
    </div>
  );
};

export default Header;
