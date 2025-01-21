import { Box, CheckboxGroup, Heading, VStack, Stack, Center, Flex, HStack } from "@chakra-ui/react";
import { Tooltip } from "../../components/ui/tooltip"
import { CheckboxCard } from "../../components/ui/checkbox-card"
import { useState } from "react";
import { IoInformationCircle } from "react-icons/io5";


function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

const Goal = (props) => {
  const [stepContent] = useState ({
    "key": props.step.key,
    "content": []
  });
  
  const update = (e) => {
    if(stepContent.content.includes(e.target.value)) {
      removeItemOnce(stepContent.content, e.target.value)
    } else {
      stepContent.content.push(e.target.value);
    }
    props.update(stepContent);
  };

  return (
  <Stack width="100%">
    <Center >
      <VStack>
          <Box padding={5} borderWidth={1} width="100%" borderColor={"black"} borderRadius={5}>
            <Heading marginTop={0} marginBottom={0} >
              <HStack>
                {props.step.question}
                <Tooltip showArrow size="l" positioning={{ placement: "top" }} content={props.step.tooltip}>
                  <IoInformationCircle />
                </Tooltip>
              </HStack>
            </Heading>
            <Box marginBottom={3}>(Mehrauswahl möglich)</Box>
            <CheckboxGroup name={props.step.key} onChange={update} >
              <Flex gap="15px" wrap="wrap" justify="center" >
                {props.step.answers.map((answer) => 
                  <CheckboxCard
                    label={answer.title}
                    description={answer.description}
                    value={answer.id}
                  />
                )}
              </Flex>
            </CheckboxGroup>
          </Box>
      </VStack>
    </Center>
  </Stack>
  )
}

export default Goal;