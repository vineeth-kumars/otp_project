import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import DiologueContext from "./ContactInfoPage";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import messageHistoryContext from "../demo";

export default function MessageDialogueBox(props) {
  // const {messageHistory} = useContext(messageHistoryContext);
  const theme = useTheme();
  var message = "";
  var sentmessage = {};
  const [previousMessage, setPreviousMessage] = React.useState([]);
  var individualMessageHistory = null;
  //  console.log(props.setMessageHistory);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const OTP =
    "Hii , Your OTP is " + Math.floor(100000 + Math.random() * 900000);
  // console.log(OTP)
  // console.log(props.contactInfo);

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Send Message To : {props.contactInfo.firstName}
        </DialogTitle>
        <DialogContent>
          {/* <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    > */}
          <TextField fullWidth label="" id="fullWidth" defaultValue={OTP} />
          {/* </Box> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              props.handleClose();
              console.log(props.messageHistory);
              message = fullWidth.defaultValue;
              // console.log(message);
              sentmessage = { message: message };

              individualMessageHistory = Object.assign(
                props.contactInfo,
                sentmessage
              );
              // props.setMessageHistory(individualMessageHistory);
              previousMessage.push(individualMessageHistory);
              console.log(previousMessage);
              props.setMessageHistory(previousMessage);

              // messageHistory.push(individualMessageHistory)
              // console.log(messageHistory)
              // console.log(individualMessageHistory);

              // console.log(sentmessage);
            }}
            autoFocus
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
