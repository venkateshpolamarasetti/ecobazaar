import React from 'react'
import { icons } from '../../assets'

const Close = () => {
    const [isHovered, setIsHovered] = React.useState(false)
  return (
    <img onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)} src={isHovered ? icons.closeIconHover : icons.closeIconDefault} alt="close" width={24} height={24} />
  )
}

export default Close