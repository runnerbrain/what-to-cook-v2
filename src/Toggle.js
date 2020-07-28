import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import { FaFileExcel } from 'react-icons/fa';

export const Toggle = ({ children }) => {
  const [toggled, setToggled] = useState(false);

  const transition = useTransition(toggled, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const iconTransition = useTransition(toggled, null, {
    from: {
      position: 'absolute',
      marginTop: '15px',
      left: '50%',
      marginLeft: '-10px',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#83490c',

      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const toggle = () => {
    setToggled(!toggled);
  };

  return children([toggled, toggle, transition, iconTransition]);
};
