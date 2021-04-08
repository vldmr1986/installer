import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

import FirstComponentBush from "./firstComponentBush";


import "../styles/index.scss";
import { HeaderExample } from './layoutHp';

const App = () => {

    console.log("1111111222")
  return (
      <Grommet theme={hpe}>
        <HeaderExample />
      </Grommet>
  );
};

export default App;

