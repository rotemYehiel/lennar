import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/actions/appAction";
import { languageSelector } from "../store/selectors/appSelectors";

const LanguageDropdown = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(languageSelector);

  const handleChange = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  return (
    <select value={currentLanguage} onChange={handleChange}>
      <option value="en">English</option>
      <option value="he">Hebrew</option>
    </select>
  );
};

export default LanguageDropdown;
