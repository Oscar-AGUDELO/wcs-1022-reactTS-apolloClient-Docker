import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import * as GPL from "../services/gplFunctions";

function AddSkillForm({ onSkillCreated }: {onSkillCreated: () => void}) {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("https://source.unsplash.com/random/100x100/?logo");

  const [FetchcreateSkill] = useMutation(GPL.Create_Skill);
  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    await FetchcreateSkill({ variables: { name, logo } });
    setName("");
    setLogo("https://source.unsplash.com/random/100x100/?logo");
    onSkillCreated();
  }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h3>Ajouter un Skill</h3>
      <form id="addSkill">
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <p>Link Logo</p>
        <input
          type="text"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
        ></input>
        <button type="submit" onClick={onSubmit}>
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddSkillForm;