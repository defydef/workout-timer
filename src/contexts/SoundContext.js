import { createContext, useCallback, useContext, useState } from "react";
import clickSound from "../ClickSound.m4a";

const SoundContext = createContext();

function SoundProvider({ children }) {
  const [allowSound, setAllowSound] = useState(true);

  const playSound = useCallback(
    function () {
      if (!allowSound) return;
      const sound = new Audio(clickSound);
      sound.play();
    },
    [allowSound]
  );

  const handleSound = useCallback(function handleSound() {
    setAllowSound((allow) => !allow);
  }, []);

  return (
    <SoundContext.Provider value={{ handleSound, playSound, allowSound }}>
      {children}
    </SoundContext.Provider>
  );
}

function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined)
    throw new Error(
      "useSound is undefined because it is defined inside the children component of App"
    );
  return context;
}

export { SoundProvider, useSound };
