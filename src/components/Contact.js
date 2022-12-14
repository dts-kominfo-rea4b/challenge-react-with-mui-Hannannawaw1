// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <List sx={{ width: "100%", backgroundColor: "#b0d4f3" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ width: "70px", height: "70px", marginRight: "10px" }}>
            <img src={data.photo} alt="" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography color="text.primary">{data.name}</Typography>
          <Typography color="text.secondary">{data.phone}</Typography>
          <Typography color="text.secondary">{data.email}</Typography>
        </ListItemText>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default Contact;
