import {ThemeProvider} from "styled-components"
import {GlobalStyle} from './styles/GlobalStyle'
import { commonStyle } from './styles/commonStyle';

import SharedLayout from "./layouts/SharedLayout";


const App:React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme = {commonStyle}>
        <GlobalStyle/>
      <SharedLayout/>
      </ThemeProvider>
    </div>
  );
}

export default App;
