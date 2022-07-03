import React from "react";
// import Card from '@mui/material/Card';
import BasicCard from "./ListCard";

const contactsData = [
  {
    firstName: "Rajesh",
    lastName: "Ikshvakula",
    mobileNumber: 9704546697
  },
  {
    firstName: "vineeth",
    lastName: "sattineni",
    mobileNumber: 9908216181
  }
];

function Contacts(props) {
  // console.log(contactsData);

  return (
    <div>
      <BasicCard
        setMessageHistory={props.setMessageHistory}
        contactsData={contactsData}
      />
    </div>
  );
}

export default Contacts;
