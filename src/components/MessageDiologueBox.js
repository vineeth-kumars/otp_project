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

export default function MessageDialogueBox(props) {
  // const {open ,handleClose} = useContext(DiologueContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  console.log(props.contactInfo);

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
          <TextField fullWidth label="" id="fullWidth" />
          {/* </Box> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose}>
            Cancel
          </Button>
          <Button onClick={props.handleClose} autoFocus>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
