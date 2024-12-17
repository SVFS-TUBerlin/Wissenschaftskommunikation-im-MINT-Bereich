// from: https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/wizard.js

import StepWizard from "react-step-wizard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Center, Box, VStack, HStack, Icon, Heading } from "@chakra-ui/react";
import { Button } from "../components/ui/button";

import transitions from './transitions.less';
import Goal from './steps/Goal.jsx';
import Group from './steps/Group.jsx';
import Results from './steps/Results.jsx';
import { FaHome } from "react-icons/fa";

import useSound from 'use-sound';

import sound from '../sounds/christmas.mp3';
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
            <Link to="/">WissKommPass</Link>
          </Box>
          <Link to="/"><Icon size={"2xl"}><FaHome /></Icon></Link>
          </HStack>
        {/* <Button onClick={handleSound} >play sound</Button> */}
        <Box marginTop={0} marginLeft={20} marginRight={20} marginBottom={10} maxWidth={1000}>
          <StepWizard 
            transitions={state.transitions}
            instance={setInstance}
          >
            <Goal update={updateForm} step={stepFile[0]} stepCount={0} totalSteps={stepFile.length} />
            <Group update={updateForm} step={stepFile[1]} stepCount={1} totalSteps={stepFile.length} />
            <Goal update={updateForm} step={stepFile[2]} stepCount={2} totalSteps={stepFile.length} />
            <Results form={state.form} stepFile={stepFile} stepCount={3} reset={reset} />
          </StepWizard>
        </Box>
      </VStack>
    </Center>
    </>
  )
}

export default Wizard;