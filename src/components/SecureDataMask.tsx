import { useEffect, useRef, useState } from "react";

type SecureDataMaskProps = {
  value: string;
};

const SecureDataMask = ({ value }: SecureDataMaskProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const timerRef = useRef<number | null>(null);

  const getMaskedValue = (text: string) => {
    if (text.length === 12) {
      return `XXXX-XXXX-${text.slice(-4)}`;
    }

    return `${"X".repeat(Math.max(0, text.length - 4))}${text.slice(-4)}`;
  };

  const revealData = () => {
    setIsRevealed(true);
    setAnnouncement("Sensitive data revealed");

    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setIsRevealed(false);
      setAnnouncement("Sensitive data hidden");
    }, 10000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <p id="credential-number" aria-live="polite">
        {isRevealed ? value : getMaskedValue(value)}
      </p>

      <button
        onClick={revealData}
        aria-controls="credential-number"
        aria-expanded={isRevealed}
        aria-label={
          isRevealed ? "Sensitive data is visible" : "Reveal sensitive data"
        }
      >
        {isRevealed ? "Revealed" : "Tap to Reveal"}
      </button>

      <span aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </div>
  );
};

export default SecureDataMask;
