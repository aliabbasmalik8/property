import React from 'react';

import '../styles.scss';

type AccountStepProps = { step: any, activeStep: number, setActiveStep: any };

function AccountStep({step, activeStep, setActiveStep}: AccountStepProps) {
  return (
    <div className={`account-step-banner ${activeStep === step.id ? 'active-step': '' }`}  onClick={() => setActiveStep(step.id)}>
      <div className="account-img-banner">
        {step.icon}
      </div>
      <div className="account-step-title">
      {step.title}
      </div>
      {step.id !== 3 && <div className="vertical-line" />}
    </div>
  )
}

export default AccountStep;