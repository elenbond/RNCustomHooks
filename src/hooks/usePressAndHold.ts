import { useState, useEffect, useRef } from "react";

const usePressAndHold = (callback?: () => void, delay: number = 1000) => {
  const [isHeld, setIsHeld] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onPressIn = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHeld(true)
      if (callback) {
        callback()
      }
    }, delay)
  }

  const onPressOut = () => {
    if (timeoutRef.current){
      clearTimeout(timeoutRef.current)
    }   
    setIsHeld(false)
  }

  useEffect(()=> {
    return()=>{
      if(timeoutRef.current){
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return {onPressIn, onPressOut, isHeld}
};

export default usePressAndHold;