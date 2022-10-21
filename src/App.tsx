import "./App.css";
import Wilder from "./components/Wilder";
import AddWilderForm from "./components/AddWilderForm";
import AddSkillForm from "./components/AddSkillForm";
import Votes from "./components/Votes";
import { useQuery } from '@apollo/client';
import * as GPL from "./services/gplFunctions";

export interface ISkillsProps {
  id: number;
  name: string;
  logo: string | null;
}
export interface IWilderProps {
  id: number;
  name: string;
  photoURL: string;
  city: string | null;
  upvotes: [{ id: number; count: number; skill: { id: number, name: string, logo: string } }];
}

function App() {
  const findAllWilders = useQuery(GPL.Find_All_Wilders);
  const findAllSkills = useQuery(GPL.Find_All_Skills);
  

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Admin panel</h2>
        <br />
        <div style={{ display: "flex", gap: "2rem" }}>
          <AddWilderForm onWilderCreated={() => findAllWilders.refetch()} />
          <AddSkillForm onSkillCreated={() => findAllSkills.refetch()} />
          {findAllSkills.data && (
            <Votes
              skills={findAllSkills.data.findAllSkills}
              wilders={findAllWilders.data.findAllWilders}
              onUpvotes={() => findAllWilders.refetch()}
            />
          )}
        </div>
        <br />
        <br />
        <h2>Les super wilders</h2>
        <section className="card-row">
          {findAllWilders.data?.findAllWilders.map((wilder: IWilderProps) => {
            return <Wilder key={wilder.id} wilder={wilder} />;
          })}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
  }
  
export default App;

