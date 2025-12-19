import React from "react";
import { Inbox } from "@novu/react";
import { useNavigate } from "react-router-dom";

const NovuInbox = () => {
  const navigate = useNavigate();
  return (
    <Inbox
      applicationIdentifier="PxjFJ4Gb4Nmi"
      subscriber="6944d926f9d367c5963879ae"
      routerPush={(path) => navigate(path)}
    />
  );
};

export default NovuInbox;
