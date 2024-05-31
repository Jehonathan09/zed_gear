"use client"
import Image from "next/image";
import { CustomButtonProps } from "@/types";


//Define the CustomButton compoment
//This component renders a custom button with a title and a optional click handler 
const CustomButton = ({title, containerStyles, 
    handleClick}: CustomButtonProps) => {
   // Render the button element with the given props
  // The button is disabled by default and has a type of "button"
  // The className prop is set to "custom-btn" and the containerStyles prop
  return (
    <button
    disabled={false}
    type={"button"}
    className={'custom-btn ${containerStyles}'}
    onClick={handleClick}
    >
        {/* Render the title prop inside a span element with a flex-1 class */}
        <span className={'flex-1'}>
            {title}
        </span>

    </button>
  )
}
// Export the CustomButton component
export default CustomButton