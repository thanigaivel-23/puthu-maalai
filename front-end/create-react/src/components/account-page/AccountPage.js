import React from "react";
import AccountPic from "./main/AccountPic";
import AccountDetails from "./main/AccountDetails";
import AccountLogout from "./main/AccountLogout";
import { useSelector } from "react-redux";

const AccountPage = () => { 

  const {user} = useSelector(state => state.authState)

  return (
    <>
      <AccountPic user={user} />
      <AccountDetails />
      <AccountLogout />
    </>
  );
};

export default AccountPage;
