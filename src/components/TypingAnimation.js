import React from 'react'
import { TypeAnimation } from 'react-type-animation';


function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        'Student', // Types 'One'
        2000, // Waits 1s
        'Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Athlete', // Types 'Three' without deleting 'Two'
        2000,
        'Friend',
        2000
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', color: 'deepblue'}}
    />
  )
}

export default TypingAnimation;