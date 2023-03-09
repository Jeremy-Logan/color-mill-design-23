import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = { delay: number, isInView: boolean };

export default function Hexagon({ delay, isInView }: Props) {
  const [fillColor, setFillColor] = useState<string>("");

  useEffect(() => {
    const colors = [
      "#F47934",
      "#07B2A0",
      "#ED176B",
      "#7AAD42",
      "#69489D",
      "#FCB317",
      "#87CDB3",
    ];
    function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }
    const color = getRandomColor() || "";
    setFillColor(color);
  }, []);

  return (
    <div key={delay}>
      {fillColor && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0}}
          transition={{ delay: delay, duration: 0.55, ease: "easeIn" }}
          className="mx-1 flex"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 280 280"
          >
            <motion.polygon
              style={{ fill: fillColor }}
              points="261.2,210 261.2,70 140,0 18.8,70 18.8,210 140,280"
            />
          </motion.svg>
        </motion.div>
      )}
    </div>
  );
}
