import { useState } from "react"

export const useToggle = () => {
    const [isPopUp, setIsPopUp] = useState(false)

    const openPopUp = () => setIsPopUp(true)
    const closePopUp= () => setIsPopUp(false)
    const togglePopUp = () => setIsPopUp(!isPopUp)

    return {openPopUp, closePopUp, togglePopUp, isPopUp}
}