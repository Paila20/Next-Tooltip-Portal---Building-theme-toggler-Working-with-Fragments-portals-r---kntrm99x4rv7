import { useState, useEffect } from 'react';
import TooltipPortal from './TooltipPortal';

function DynamicTooltip() {
  const [tooltipPosition, setTooltipPosition] = useState({ top: '50px', left: '50px' });

  useEffect(() => {
    // Add any logic here to dynamically set the tooltip position based on your requirements
    // For example, you might calculate the position based on the window size, mouse position, etc.

    // For now, let's just update the position every time the component mounts
    setTooltipPosition({ top: '100px', left: '100px' });

    // Cleanup function if needed (componentWillUnmount equivalent)
   
  }, []); //

 

  return (
    <TooltipPortal>
      <div style={{ position: 'absolute', top: '50px', left: '50px', backgroundColor: 'gray', padding: '10px', borderRadius: '5px' }}>
      this is a tooltip
      </div>
    </TooltipPortal>
  );
}

export default DynamicTooltip;
