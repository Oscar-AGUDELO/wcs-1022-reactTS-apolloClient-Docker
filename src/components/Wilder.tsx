import React from "react";
import { IWilderProps } from "../App";
import blank_profile from "./../assets/blank_profile.png";
import Skill from "./Skill";
function Wilder({ wilder }: { wilder: IWilderProps }) {
  return (
    <article className="card">
      {wilder.photoURL ? (
        <img src={wilder.photoURL} alt={`blank profile`} />
      ) : (
        <img src={blank_profile} alt={`blank profile`} />
      )}
      <h3>{wilder.name}</h3>
      <p>
        {wilder.name} is from {wilder.city}
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {wilder.upvotes.length
          ? wilder.upvotes.map((upvote) => {
              return <Skill key={upvote.id} upvote={upvote} />;
            })
          : "Pas qualifié"}
      </ul>
    </article>
  );
}

export default Wilder;
