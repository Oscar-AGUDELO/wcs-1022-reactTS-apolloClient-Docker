import React from "react";

export interface IUpvoteProps {
  id: number; 
  count: number; 
  skill: { id: number, name: string, logo: string } 
}
function Skill({ upvote }: { upvote: IUpvoteProps }) {
  return (
    <li>
      {!upvote.skill.logo ? (
        ""
      ) : (
        <img src={upvote.skill.logo} alt="logo" style={{ width: "3rem", objectFit: "contain", marginRight: "0.5rem" }} />
      )}

      {!upvote || upvote === null || upvote === undefined ? (
        <span className="votes">0%</span>
      ) : (
        <span className="votes">{upvote.count}%</span>
      )}
    </li>
  );
}

export default Skill;
