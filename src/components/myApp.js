import React from "react";
import ContactCard from "./contactCard";
const MyApp = () => (
  <div>
    <ContactCard
      contact={{
        name: "Mr. Whiskerson",
        phone: "(212) 555-1234",
        email: "mr.whiskaz@catnap.meow",
        imgUrl: "http://placekitten.com/300/200"
      }}
    />
    <ContactCard
      contact={{
        name: "Fluffykins",
        phone: "(212) 555-2345",
        email: "fluff@me.com",
        imgUrl: "http://placekitten.com/400/200"
      }}
    />
    <ContactCard
      contact={{
        name: "Destroyer",
        phone: "(212) 555-3456",
        email: " ofworlds@yahoo.com",
        imgUrl: "http://placekitten.com/400/300"
      }}
    />
    <ContactCard
      contact={{
        name: "Felix",
        phone: "(212) 555-4567",
        email: "thecat@hotmail.com",
        imgUrl: "http://placekitten.com/200/100"
      }}
    />
  </div>
);
export default MyApp;
