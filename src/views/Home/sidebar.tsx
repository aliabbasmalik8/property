import React, { useState } from 'react';
import AccountStep from './components/AccountStep';

import Property from 'assets/icons/Property';
import AccountIcon from 'assets/icons/Account'
import Service from 'assets/icons/Service';

const steps = [
  { id: 1, title: 'Create Account', icon: <AccountIcon /> },
  { id: 2, title: 'Property Details', icon: <Property /> },
  { id: 3, title: 'Select Services', icon: <Service /> }
]

function Sidebar() {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className="sidebar-banner">
      {steps.map((step, index) => {
        return <AccountStep key={index} {...{ step, activeStep, setActiveStep }} />
      })}
    </div>
  )
}

export default Sidebar;
