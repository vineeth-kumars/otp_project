import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ContactInfoPage from "./ContactInfoPage";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  const [showInfoPage, setShowInfoPage] = React.useState(false);
  const [contactInfo, setContactInfo] = React.useState({});
  const contactsList = props.contactsData;

  const ShowInfoPageHandle = () => {
    setShowInfoPage(true);
  };
  console.log(contactsList);
  return (
    <div>
      {showInfoPage === false ? (
        <>
          {contactsList.map((contact) => {
            return (
              <>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="body2">
                      Contact Name:{contact.firstName}
                      <br />
                      Mobile Number:{contact.mobileNumber}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        setShowInfoPage(true);
                        setContactInfo(contact);
                      }}
                    >
                      Contact Info
                    </Button>
                  </CardActions>
                </Card>
                <br />
              </>
            );
          })}
        </>
      ) : (
        <ContactInfoPage />
      )}
    </div>

    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography variant="body2">
    //       Contact Name:
    //       <br />
    //       Mobile Number:
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}
