import { useSound } from "./contexts/SoundContext";

function ToggleSounds() {
  const { allowSound, handleSound } = useSound();

  return (
    <button className="btn-sound" onClick={handleSound}>
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

export default ToggleSounds;
