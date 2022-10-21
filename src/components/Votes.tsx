import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { IWilderProps, ISkillsProps } from "../App";
import * as GPL from "../services/gplFunctions";

function Votes({
  onUpvotes,
  wilders,
  skills,
}: {
  onUpvotes: () => void;
  wilders: IWilderProps[];
  skills: ISkillsProps[];
}) {
  const [wilderId, setWilderId] = useState<number | undefined>(undefined);
  const [skillId, setSkillId] = useState<number | undefined>(undefined);
  const [count, setCount] = useState<number>(0);

  const [FetchcreateUpvote] = useMutation(GPL.Create_Upvote);
  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (wilderId === null || skillId === null || count === null) {
      return console.log("Pas de data");
    }
    await FetchcreateUpvote({ variables: { wilderId, skillId, count } });
    setWilderId(0);
    setSkillId(0);
    setCount(0);
    onUpvotes();
    console.log("SEND");
  }
  const handleChangeWilderId = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const valeur: number = parseInt(event.target.value);
    setWilderId(valeur);
  };
  const handleChangeSkillId = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const valeur: number = parseInt(event.target.value);
    setSkillId(valeur);
  };
  const handleChangeCount= (event: React.ChangeEvent<HTMLInputElement>) => {
    const valeur: number = parseInt(event.currentTarget.value);
    setCount(valeur);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Qualifier un wilder</h3>
      <form id="addVote">
        <p>WILDERS</p>
        <select required value={wilderId} onChange={handleChangeWilderId}>
          <option value="">Choose one</option>
          {wilders.length >= 1
            ? wilders.map((wilder: { id: number; name: string }) => {
                return (
                  <option key={wilder.id} value={wilder.id}>
                    {wilder.name}
                  </option>
                );
              })
            : "Pas de Wlders"}
        </select>
        <p>SKILLS</p>
        <select required value={skillId} onChange={handleChangeSkillId}>
          <option value="">Choose one</option>
          {skills
            ? skills.map((skill: { id: number; name: string }) => {
                return (
                  <option key={skill.id} value={skill.id}>
                    {skill.name}
                  </option>
                );
              })
            : "Pas de Wlders"}
        </select>
        <p>NOTE /100</p>
        <input
          type="number"
          value={count}
          placeholder="0"
          onChange={handleChangeCount}
          min="0"
          max="100"
          pattern="^\d+$"
          style={{ width: "3rem", textAlign: "center" }}
          required
        ></input>
        <button type="submit" onClick={onSubmit}>
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default Votes;
