import { useState } from "react";
import TeamProject from "./TeamProject";
import ToyProject from "./ToyProject";

function ProjectPage() {
  const [category, setCategory] = useState(0);

  return (
    <div>
      <div>
        <ul>
          <li onClick={() => setCategory(0)}>Team</li>
          <li onClick={() => setCategory(1)}>Toy</li>
        </ul>
        <div>{category && Category[category]}</div>
      </div>
    </div>
  );
}
export default ProjectPage;

const Category = {
  0: <TeamProject />,
  1: <ToyProject />,
};
