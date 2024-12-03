// from: https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/wizard.js

import StepWizard from "react-step-wizard";
import { useEffect, useState } from "react";

import transitions from './transitions.less';
import Goal from './steps/Goal.jsx';
import Group from './steps/Group.jsx';
import Results from './steps/Results.jsx';

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
  
  const { SW } = state;

  return (
    <StepWizard 
      transitions={state.transitions} // comment out for default transitions
      // nav={<Nav />}
      instance={setInstance}
    >
      <Goal update={updateForm} step={stepFile[0]} stepCount={0} totalSteps={stepFile.length} />
      <Group update={updateForm} step={stepFile[1]} stepCount={1} totalSteps={stepFile.length} />
      <Goal update={updateForm} step={stepFile[2]} stepCount={2} totalSteps={stepFile.length} />
      <Results form={state.form} stepFile={stepFile} reset={reset} />
    </StepWizard>
  )
}

export default Wizard;