import React from "react";
import AccountPic from "./main/AccountPic";
import AccountDetails from "./main/AccountDetails";
import AccountLogout from "./main/AccountLogout";

const AccountPage = () => {
  return (
    <>
      <AccountPic />
      <AccountDetails />
      <AccountLogout />
    </>
  );
};

export default AccountPage;
