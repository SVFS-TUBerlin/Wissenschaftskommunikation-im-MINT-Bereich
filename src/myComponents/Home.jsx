import { Center, Box, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <Center>
      <VStack>
        <Box margin={10} >
          <Link to="/">Wiko Tool - wie soll ich Wissenschaft kommunizieren?</Link>
        </Box>
        <Box marginTop={0} marginLeft={20} marginRight={20} marginBottom={10}>
          Einleitender Text
        </Box>
        <Button><Link width="100%" height="100%" to="/tool">Start</Link></Button>
      </VStack>
    </Center>
  )
}

export default Home;