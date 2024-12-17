import { Button } from "../../components/ui/button";
import { Box, CheckboxGroup, Heading, VStack, HStack, Stack, Center, Flex } from "@chakra-ui/react";
import { CheckboxCard } from "../../components/ui/checkbox-card"
import { Radio, RadioGroup } from "../../components/ui/radio"
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useState } from "react";

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

const Group = (props) => {
  const [stepContent] = useState ({
    "key": "zielgruppe",
    "content": {
      "alter": [],
      "themenbezug": 301,
      "kontext": []
    }
  });
  
  const update = (e) => {
    if(e.target.name === "themenbezug") {
      stepContent.content[e.target.name] = e.target.value;
      props.update(stepContent);
    } else{ 
      if(stepContent.content[e.target.name].includes(e.target.value)) {
        removeItemOnce(stepContent.content[e.target.name], e.target.value)
      } else {
        stepContent.content[e.target.name].push(e.target.value);
      }
      props.update(stepContent);
    }
  };

    return (
    <Stack width="100%">
      <Center >
        <VStack>
          <Heading marginBottom={5} size="md">Wähle die Kriterien deiner Wissenschaftskommunikation</Heading>
          <Box padding={5} borderWidth={1} width="100%" borderColor={"black"} borderRadius={5}>
            <Heading marginTop={0} marginBottom={0} >
            {props.step.questions[0].question}
            </Heading>
            <Box marginBottom={3}>(Mehrauswahl möglich)</Box>
            <CheckboxGroup name={props.step.questions[0].key} onChange={update} >
              <Flex gap="15px" wrap="wrap" justify="center" >
              {props.step.questions[0].answers.map((answer) => 
                <CheckboxCard
                  label={answer.title}
                  description={answer.description}
                  value={answer.id}
                />
              )}
              </Flex>
            </CheckboxGroup>
          </Box>
          <Box padding={5} borderWidth={1} width="100%" borderColor={"black"} borderRadius={5}>
            <Heading>
            {props.step.questions[1].question}
            </Heading>
            <Box marginBottom={3}>(Nur eins auswählen)</Box>
            <RadioGroup defaultValue={301} name={props.step.questions[1].key} onChange={update} >
              <HStack gap="6">
              {props.step.questions[1].answers.map((answer) => 
                <Radio value={answer.id}>{answer.title}</Radio>
              )}
              </HStack>
            </RadioGroup>
          </Box>
          <Box padding={5} borderWidth={1} width="100%" borderColor={"black"} borderRadius={5}>
            <Heading>
            {props.step.questions[2].question}
            </Heading>
            <Box marginBottom={3}>(Mehrauswahl möglich)</Box>
            <CheckboxGroup name={props.step.questions[2].key} onChange={update} >
              <Flex gap="15px" wrap="wrap" justify="center" >
              {props.step.questions[2].answers.map((answer) => 
                <CheckboxCard
                  label={answer.title}
                  description={answer.description}
                  value={answer.id}
                />
              )}
              </Flex>
            </CheckboxGroup>
          </Box>
          <HStack marginTop={5}>
            <Button variant="outline" onClick={props.stepCount!=0 ? props.previousStep : null}><GoArrowLeft color={props.stepCount!=0 ? "rgb(0,0,0)" : "rgb(150,150,150)"} /></Button>
            <Box marginLeft={5} marginRight={5}>{props.stepCount+1}/{props.totalSteps}</Box>
            <Button variant="outline" onClick={props.stepCount!=3 ? props.nextStep : null}><GoArrowRight color={props.stepCount!=3 ? "rgb(0,0,0)" : "rgb(150,150,150)"} /></Button>
          </HStack>
        </VStack>
      </Center>
    </Stack>
    )
  }

export default Group;