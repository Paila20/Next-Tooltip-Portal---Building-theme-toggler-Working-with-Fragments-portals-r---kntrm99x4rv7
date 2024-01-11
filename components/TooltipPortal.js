import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = typeof document !== 'undefined' ? document.getElementById('tooltip-portal') : null;

function TooltipPortal({ children }) {
  const portalElement = document.createElement('div');

  useEffect(() => {
    // Ensure portalRoot exists in the DOM
    if (portalRoot) {
      portalRoot.appendChild(portalElement);
    }

    // Cleanup function
    return () => {
      if (portalRoot) {
        portalRoot.removeChild(portalElement);
      }
    };
  }, [portalElement]);

  return portalRoot ? ReactDOM.createPortal(children, portalElement) : null;
}

export default TooltipPortal;
