import { Box, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import Goal from "./Goal";
import Group from "./Group";
import { Button } from "../../components/ui/button";


const Questionaire = (props) => {

  const toResults = () => {
    window.scrollTo(0,0);
    props.lastStep();
  }

  return (
    <>
      <Center>
        <VStack>
          <Heading marginBottom={5} maxWidth="65%" padding="1rem 2rem" background="#92a8D1" color="white" size="md">Wähle die Kriterien deiner Wissenschaftskommunikation</Heading>
          <Goal update={props.update} step={props.stepFile[0]} />
          <Goal update={props.update} step={props.stepFile[2]} />
          <Group update={props.update} step={props.stepFile[1]} />
          <HStack marginTop={5}>
            <Button onClick={toResults}>Show the results</Button>
          </HStack>
        </VStack>
      </Center>
    </>
  );
}

export default Questionaire;