import { Box, CheckboxGroup, Heading, VStack, HStack, Stack, Center, Flex } from "@chakra-ui/react";
import { Tooltip } from "../../components/ui/tooltip"
import { CheckboxCard } from "../../components/ui/checkbox-card"
import { Radio, RadioGroup } from "../../components/ui/radio"
import { useState } from "react";
import { IoInformationCircle } from "react-icons/io5";

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
      // "kontext": []
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
        <VStack width="100%">
          <Box padding={5} borderWidth={1} width="100%" borderColor={"black"} borderRadius={5}>
            <Heading marginTop={0} marginBottom={0} >
              <HStack>
                {props.step.questions[0].question}
                <Tooltip showArrow positioning={{ placement: "top" }} content={props.step.questions[0].tooltip}>
                  <IoInformationCircle />
                </Tooltip>
              </HStack>
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
              <HStack>
                {props.step.questions[1].question}
                <Tooltip showArrow positioning={{ placement: "top" }} content={props.step.questions[1].tooltip}>
                  <IoInformationCircle />
                </Tooltip>
              </HStack>
            </Heading>
            <Box marginBottom={3}>(Nur eins auswählen)</Box>
            <RadioGroup name={props.step.questions[1].key} onChange={update} >
              <HStack gap="6">
              {props.step.questions[1].answers.map((answer) => 
                <Radio value={answer.id}>{answer.title}</Radio>
              )}
              </HStack>
            </RadioGroup>
          </Box>
          {/* <Box padding={5} borderWidth={1} width="100%" borderColor={"black"} borderRadius={5}>
            <Heading>
              <HStack>
                {props.step.questions[2].question}
                <Tooltip showArrow positioning={{ placement: "top" }} content={props.step.questions[2].tooltip}>
                  <IoInformationCircle />
                </Tooltip>
              </HStack>
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
          </Box> */}
        </VStack>
      </Center>
    </Stack>
    )
  }

export default Group;