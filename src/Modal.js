import React, { Fragment, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Portal from './Portal';

const ModalContent = ({ closeModal, children, animation }) => {
  return (
    <Portal>
      <div className="wrapper">
        <>
          <animated.div style={animation} className="modal-card">
            <button className="close-icon" onClick={closeModal}>
              Close
            </button>
            <h1>{children}</h1>
          </animated.div>
          <animated.div className="bcg" onClick={closeModal} />
        </>
      </div>
    </Portal>
  );
};
const Modal = ({ children }) => {
  const [toggled, setToggled] = useState(false);
  const transition = useTransition(toggled, null, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-40px, 0)' },
  });

  const toggle = () => {
    setToggled(!toggled);
  };

  return (
    <div>
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <ModalContent key={key} closeModal={toggle} animation={animation}>
              {children}
            </ModalContent>
          )
      )}
      <button className="cta-details" onClick={toggle}>
        Details
      </button>
    </div>
  );
};
export default Modal;
