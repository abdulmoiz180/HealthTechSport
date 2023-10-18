import React from "react";
import { Card, Typography, CardContent } from "@mui/material";
import "./appworking.css";
const DetailsCard = () => {
  const Details = [
    {
      label: "01",
      message1: "FIRST DOWNLOAD OUR APP AND SIGN UP TO GET STARTED!",
      message2: "YOUR GYM PASSPORT LIVES HERE!"
    },
    {
      label: "02",
      message1: "PURCHASE OUR MEMBERSHIP PASS FROM THE APP",
      message2:
        "OUR PASS IS A MONTHLY SUBSCRIPTION PASS. YOU CAN CANCEL AT ANYTIME!"
    },
    {
      label: "03",
      message1: "VISIT ANY FITNESS CENTRE!",
      message2:
        "WE HAVE PARTNERED WITH CENTERS ACROSS PAKISTAN, SO THE LAST THING THAT WILL COME BETWEEN YOU AND YOUR FITNESS GOALS,WILL BE AN EXCUSE!"
    }
  ];
  return (
    <div className="details-card-container">
      {Details.map((detail) => (
        <Card className="details-card" sx={{ display: "flex" }}>
          <CardContent className="card-flex" sx={{ display: "flex" }}>
            <Typography className="num">
              {detail.label}
            </Typography>
            <div className="detail-divider"></div>
            <div className="message-container">
              <Typography className="details-typography clr-red">
                {detail.message1}
              </Typography>
              <Typography className="details-typography clr-gray">
                {detail.message2}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DetailsCard;
