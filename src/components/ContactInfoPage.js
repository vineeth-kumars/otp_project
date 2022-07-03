import React, { createContext } from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MessageDialogueBox from "./MessageDiologueBox";

export const DiologueContext = createContext(null);

export default function ContactInfoPage(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // console.log(props.contactInfo);
  return (
    <>
      <DiologueContext.Provider>
        <MessageDialogueBox
          setMessageHistory={props.setMessageHistory}
          open={open}
          handleClose={handleClose}
          contactInfo={props.contactInfo}
        />
      </DiologueContext.Provider>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            CONTACT INFORMATION:
          </Typography>
          <Typography variant="body2">
            Name of the Contact:
            {props.contactInfo.firstName}
            <br />
          </Typography>
          <Typography variant="body2">
            Mobile Number of the Contact:
            {props.contactInfo.mobileNumber}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleClickOpen} size="small">
            Send a Message
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
