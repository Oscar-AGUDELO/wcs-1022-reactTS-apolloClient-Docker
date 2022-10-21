import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import * as GPL from "../services/gplFunctions";

function AddWilderForm({ onWilderCreated }: {onWilderCreated: () => void}) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [photoURL, setPhotoURL] = useState("https://source.unsplash.com/random/?boy");

  const [FetchcreateWilder] = useMutation(GPL.Create_Wilder);
  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    await FetchcreateWilder({ variables: { name, city, photoURL } });
    setName("");
    setCity("");
    setPhotoURL("https://source.unsplash.com/random/?boy");
    onWilderCreated();
  }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h3>Ajouter un wilder</h3>
      <form id="addUser">
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <p>City</p>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <p>URL Photo</p>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        ></input>
        <button type="submit" onClick={onSubmit}>
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddWilderForm;