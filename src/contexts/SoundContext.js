import { createContext, useContext, useState } from "react";
import clickSound from "../ClickSound.m4a";

const SoundContext = createContext();

function SoundProvider({ children }) {
  const [allowSound, setAllowSound] = useState(true);

  const playSound = function () {
    if (!allowSound) return;
    const sound = new Audio(clickSound);
    sound.play();
  };

  function handleSound() {
    setAllowSound((allow) => !allow);
    playSound();
  }

  return (
    <SoundContext.Provider value={{ handleSound, allowSound }}>
      {children}
    </SoundContext.Provider>
  );
}

function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined)
    throw new Error(
      "useCities is undefined because it is defined inside the children component of App"
    );
  return context;
}

export { SoundProvider, useSound };
