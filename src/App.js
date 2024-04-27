
import React from "react";
import Home from './Home.jsx';
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Header from "./Header.jsx";
import EditContact from "./EditContact.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormContact from "./FormContact.jsx";


function App() {
  return (

 
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/editcontact/:id' element={<EditContact />} />
          <Route path='/formcontact' element={<FormContact />} />
        </Routes>

      </BrowserRouter>
 

  );
}

export default App;
