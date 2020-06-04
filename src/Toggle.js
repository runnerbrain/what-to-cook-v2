import React, { useState } from 'react';
import { useTransition } from 'react-spring';

export const Toggle = ({ children }) => {
  const [toggled, setToggled] = useState(false);

  const transition = useTransition(toggled, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const iconTransition = useTransition(toggled, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const toggle = () => {
    setToggled(!toggled);
  };

  return children([toggled, toggle, transition, iconTransition]);
};

// export default Toggle = ({ children }) => {
//   const [toggled, setToggled] = useState(false);
//   const transition = useTransition(toggled, null, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//   });

//   const toggle = () => {
//     setToggled(!toggled);
//   };

//   return children([toggled, toggle, transition]);
// };
