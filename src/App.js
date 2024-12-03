import { Provider } from "./components/ui/provider"
import { Center, Box, VStack } from "@chakra-ui/react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./myComponents/Home"
import Wizard from "./myComponents/Wizard"

function App({ pageProps }) {
  return (
    <Provider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tool" element={<Wizard />} />
        </Routes>
      </HashRouter>
    </Provider>
  )
}

export default App;
