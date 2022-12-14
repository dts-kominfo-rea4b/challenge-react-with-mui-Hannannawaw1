import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  return (
    <div className="App">
      <Header />
      <Container>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          sx={{ border: "none" }}
        >
          <Grid item md={6}>
            <ContactForm addContact={addContact} />
          </Grid>
          <Grid item sm={12} md={6}>
            {contacts.map((contact, index) => (
              <Contact key={index} data={contact} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
