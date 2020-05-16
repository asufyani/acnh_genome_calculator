import React from 'react';


export const CornerIcon = ({ icon, handler }: { icon: JSX.Element, handler: () => void }) => {
  return (
    <span className='corner-icon' onClick={handler}>
      {icon}
    </span>
  )
}