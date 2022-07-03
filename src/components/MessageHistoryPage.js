import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function MessageHistoryPage(props) {
  console.log(props.messageHistory);
  return (
    <>
      {props.messageHistory.map((sent) => {
        return (
          <>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Message to{sent.firstName}
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2">
                  {sent.message}
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </>
        );
      })}
    </>

    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //       Message to
    //     </Typography>
    //     <Typography variant="h5" component="div">

    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">

    //     </Typography>
    //     <Typography variant="body2">
    //       well meaning and kindly.
    //       <br />

    //     </Typography>
    //   </CardContent>

    // </Card>
  );
}
