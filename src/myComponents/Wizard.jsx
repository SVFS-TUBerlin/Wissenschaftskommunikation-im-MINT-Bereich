// from: https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/wizard.js

import StepWizard from "react-step-wizard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Center, Box, VStack, HStack, Icon, Heading } from "@chakra-ui/react";

import transitions from './transitions.less';
import Results from './steps/Results.jsx';
import { FaHome } from "react-icons/fa";

import useSound from 'use-sound';

import sound from '../sounds/christmas.mp3';
import Questionaire from "./steps/Questionaire.jsx";
var stepFile = require ('./topics.json');

const initialForm = {
  "ziel": [],
  "zielgruppe": {
    "alter": [],
    "themenbezug": "301",
    "kontext": [],
  },
  "art": []
};

const Wizard = () => {
  const [play, { stop }] = useSound(sound);
  let playing = false;

  const [state, updateState] = useState({
    form: initialForm,
    transitions: {
        enterRight: `${transitions.animated} ${transitions.enterRight}`,
        enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
        exitRight: `${transitions.animated} ${transitions.exitRight}`,
        exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
        intro: `${transitions.animated} ${transitions.intro}`,
    },
    // demo: true, // uncomment to see more
  });

  const handleSound = () => {
    if(playing) {
      playing = false;
      stop();
    } else {
      playing = true;
      play();
    }
  }

  const updateForm = (obj) => {
    const { form } = state;
    form[obj.key] = obj.content;
    console.log("Form updated\n",form);
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
    <Center>
      <VStack>
        <HStack>
          <Box paddingTop={4} paddingBottom={4} width={400} marginBottom={5} textAlign={"center"} background={"blackAlpha.800"} color={"white"} fontSize={"x-large"}>
            <Link to="/">Medienkompass</Link>
          </Box>
          <Link to="/"><Icon size={"2xl"}><FaHome /></Icon></Link>
          </HStack>
        {/* <Button onClick={handleSound} >play sound</Button> */}
        <Box marginTop={0} marginLeft={20} marginRight={20} marginBottom={10} width="80%">
          <StepWizard 
            transitions={state.transitions}
            instance={setInstance}
          >
            <Questionaire update={updateForm} stepFile={stepFile} />
            <Results form={state.form} stepFile={stepFile} stepCount={3} reset={reset} />
          </StepWizard>
        </Box>
        
        <Box marginLeft={20} marginRight={20} marginTop={3} marginBottom={3} maxWidth={500} fontSize={"2xs"}>
          WissKommPass is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1">CC BY 4.0</a>
        </Box>
      </VStack>
    </Center>
    </>
  )
}

export default Wizard;