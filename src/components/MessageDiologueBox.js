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
  // const {setMessageHistory} = useContext(messageHistoryContext);
  // const messageHistory=props.messageHistory
  const theme = useTheme();
  // var message = "";
  var receiver =props.contactInfo.firstName;
  var sentmessage = {};

  const state={
    text:{
      recipient:receiver,
      textmessage:''
    }
  }
  const sendText = () => {

  }
  const [previousMessage, setPreviousMessage] = React.useState([]);
  const individualMessageHistory = {};
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
          Send Message To : {receiver}
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
              state.text.textmessage = fullWidth.defaultValue;
              console.log(state);
              props.setMessageHistory(state);
              fetch(`http://localhost:4000/send-text?recipient=${state.text.recipient}&textmessage=${state.text.textmessage}`)
              .catch(err => console.log(err));
              // console.log(message);
              // sentmessage = { message: message };

              // individualMessageHistory = Object.assign(
              //   props.contactInfo,
              //   sentmessage
              // );
              // props.setMessageHistory(individualMessageHistory);
              // previousMessage.push(individualMessageHistory);
              // setMessageHistory(previousMessage)
              // console.log(previousMessage);
              

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
