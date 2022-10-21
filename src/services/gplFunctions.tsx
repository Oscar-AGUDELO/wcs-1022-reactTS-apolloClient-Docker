import { gql } from "@apollo/client";

export const Find_All_Wilders = gql`
  query FindAllWilders {
    findAllWilders {
      id
      name
      city
      photoURL
      upvotes {
        skill {
          name
          logo
          id
        }
        count
        id
      }
    }
  }
`;

export const Find_All_Skills = gql`
  query FindAllSkills {
    findAllSkills {
      id
      name
    }
  }
`;

export const Create_Upvote = gql`
  mutation CreateUpvote($count: Float!, $skillId: Float!, $wilderId: Float!) {
    createUpvote(count: $count, skillId: $skillId, wilderId: $wilderId) {
      id
    }
  }
`;

export const Create_Skill = gql`
  mutation CreateSkill($logo: String!, $name: String!) {
    createSkill(logo: $logo, name: $name) {
      id
    }
  }
`;

export const Create_Wilder = gql`
  mutation CreateWilder($photoURL: String!, $city: String!, $name: String!) {
    createWilder(photoURL: $photoURL, city: $city, name: $name) {
      id
    }
  }
`;