// Importing "react" is still required when using methods from it
import { useState } from "react";

const initialState = {
  prop1: 2,
  prop2: 1,
  prop3: 4,
};

const anotherState = {
  ...initialState,
  prop3: 1,
  prop5: 1,
};

const FirstComponentBush = () => {
  const [myState, setMyState] = useState(elvenShieldRecipe);

  return (
    <div>
      HOLA
      <h3>Current State:</h3>
      <button onClick={() => setMyState(initialState)}>Elven Shield</button>
      <button onClick={() => setMyState(anotherState)}>
        HPE Design
      </button>

      <ul>
        {Object.keys(_prp).map((material) => (
          <li key={material}>
            {material}: {myState[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstComponentBush;
