import { useState } from "react";
import clickSound from "./ClickSound.m4a";

function ToggleSounds() {
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
    <button className="btn-sound" onClick={handleSound}>
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

export default ToggleSounds;
