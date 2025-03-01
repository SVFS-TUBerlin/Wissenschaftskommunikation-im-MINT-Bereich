// from: https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/wizard.js

import StepWizard from "react-step-wizard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Center, Box, VStack, HStack, Icon } from "@chakra-ui/react";

import transitions from './transitions.less';
import Results from './steps/Results.jsx';
import { FaHome } from "react-icons/fa";

import Questionaire from "./steps/Questionaire.jsx";
var stepFile = require ('./topics.json');

const initialForm = {
  "ziel": [],
  "zielgruppe": {
    "alter": [],
    "themenbezug": "301",
    // "kontext": [],
  },
  "art": []
};

const Wizard = () => {

  const [state, updateState] = useState({
    form: initialForm,
    transitions: {
        enterRight: `${transitions.animated} ${transitions.enterRight}`,
        enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
        exitRight: `${transitions.animated} ${transitions.exitRight}`,
        exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
        intro: `${transitions.animated} ${transitions.intro}`,
    },
  });

  const updateForm = (obj) => {
    const { form } = state;
    form[obj.key] = obj.content;
    updateState({
        ...state,
        form,
    });
  };

  const reset = () => {
    var { form } = state;
    form = initialForm;
    updateState({
        ...state,
        form,
    });
  }
  
  const setInstance = SW => updateState({
    ...state,
    SW,
  });

  return (
    <>
    <Center paddingLeft="10px" paddingRight="10px">
      <VStack >
          <Box padding={4} width="100%" marginBottom={5} textAlign={"center"} background={"blackAlpha.800"} color={"white"} fontSize={"x-large"}>
            <Center>
              <HStack>
                <Link to="/">Medienkompass</Link>
                <Link to="/"><Icon size={"2xl"}><FaHome /></Icon></Link>
              </HStack>
            </Center>
          </Box>
          
        <Box marginTop={0} marginLeft={20} marginRight={20} marginBottom={10} width="60%">
          <StepWizard 
            transitions={state.transitions}
            instance={setInstance}
          >
            <Questionaire width="100%" update={updateForm} stepFile={stepFile} />
            <Results form={state.form} stepFile={stepFile} reset={reset} />
          </StepWizard>
        </Box>
        
        <Box marginLeft={20} marginRight={20} marginTop={3} marginBottom={3} maxWidth={500} fontSize={"2xs"}>
          Medienkompass is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1">CC BY 4.0</a>
        </Box>
      </VStack>
    </Center>
    </>
  )
}

export default Wizard;