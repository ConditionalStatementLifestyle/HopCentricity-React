import React  from 'react'
import posed from 'react-pose';
import hopPic from '../hopCard.png'

const Box = posed.img({
    draggable: true,
    hoverable: true,
    pressable: true,
    init: {
      scale: 0.5
    },
    hover: {
      scale: 2.5,
      transition: {
        scale: {
          type: "spring",
          stiffness: 700,
          delay: 100
        }
      }
    },
    press: {
      scale: 2.5,
      transition: {
        scale: {
          type: "spring",
          stiffness: 700,
          delay: 100
        }
      }
    },
    dragEnd: {
      x: 0,
      y: 0,
      transition: { type: 'spring' }
    }
  });

const EvilHop = (props) => <Box className="box" src={hopPic}/>


export default ({ onStart, onEnd, onDrag }) => (
    <EvilHop
      onDragStart={() => onStart}
      onDragEnd={() => onEnd}
      onValueChange={{ x: onDrag, y: onDrag }}
    />
)