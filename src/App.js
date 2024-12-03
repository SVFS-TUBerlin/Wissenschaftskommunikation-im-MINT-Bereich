import { Provider } from "./components/ui/provider"
import { Center, Box, VStack } from "@chakra-ui/react";

import Wizard from "./myComponents/Wizard"

function App({ pageProps }) {
  return (
    <Provider>
      <Center>
        <VStack>
          <Box margin={10} >
            Wiko Tool - wie soll ich Wissenschaft kommunizieren?
          </Box>
          <Box marginTop={0} marginLeft={20} marginRight={20} marginBottom={10}>
            <Wizard/>
          </Box>
        </VStack>
      </Center>
    </Provider>
  )
}

export default App;
