import { Button } from "../../components/ui/button";
import { Box, CheckboxGroup, useCheckbox, Heading, VStack, HStack, Stack, Center, Flex, Card } from "@chakra-ui/react";
import { CheckboxCard } from "../../components/ui/checkbox-card"
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useState } from "react";


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
          <HStack marginBottom={5}>
            <Button variant="outline" onClick={props.previousStep}><GoArrowLeft /></Button>
            <Box marginLeft={5} marginRight={5}>{props.stepCount+1}/{props.totalSteps}</Box>
            <Button variant="outline" onClick={props.nextStep}><GoArrowRight /></Button>
          </HStack>
          <Heading height={50} borderRadius="10px">
          {props.step.question}
          </Heading>
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
      </VStack>
    </Center>
  </Stack>
  )
}

export default Goal;