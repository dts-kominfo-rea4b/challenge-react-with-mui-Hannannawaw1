import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({ addContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });
  const handleContact = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
    });
  };
  
  const addContactHandler = () => {
    addContact(newContact);
  };

  return (
    <form>
      <Card sx={{ backgroundColor: "#EFEFEF" }}>
        <CardContent>
          <TextField
            fullWidth
            name="name"
            id="name-input"
            label="Name *"
            variant="filled"
            margin="normal"
            value={newContact.name}
            onChange={handleContact}
          />
          <TextField
            fullWidth
            name="phone"
            id="phone-input"
            label="Phone *"
            variant="filled"
            margin="normal"
            value={newContact.phone}
            onChange={handleContact}
          />
          <TextField
            fullWidth
            name="email"
            id="email-input"
            label="Email *"
            variant="filled"
            margin="normal"
            value={newContact.email}
            onChange={handleContact}
          />
          <TextField
            fullWidth
            name="photo"
            id="photo-input"
            label="Photo URL *"
            variant="filled"
            margin="normal"
            value={newContact.photo}
            onChange={handleContact}
          />
          <CardActions>
            <Button
              onClick={addContactHandler}
              color="success"
              variant="outlined"
            >
              ADD NEW
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </form>
  );
};

export default ContactForm;
