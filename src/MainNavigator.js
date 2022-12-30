import React from "react";
import { Contact } from "./Contact/Contact.page";
import { Gallery } from "./Gallery/Gallery.page";
import { Landing } from "./Landing/Landing.page";

export const MainNavigator = () => {
  return (
    <>
      <Landing />
      <Gallery />
      <Contact />
    </>
  );
};
