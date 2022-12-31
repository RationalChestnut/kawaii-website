import React from "react";
import { Contact } from "./Contact/Contact.page";
import { Gallery } from "./Gallery/Gallery.page";
import { Landing } from "./Landing/Landing.page";
import { Navigation } from "./Navigation/Navigation.page";
export const MainNavigator = () => {
  return (
    <>
      <Navigation />
      <Landing />
      <Gallery />
      <Contact />
    </>
  );
};
