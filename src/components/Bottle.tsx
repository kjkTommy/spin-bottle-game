import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

interface BottleProps {
  isSpinning: boolean;
  finalRotation: number;
  onClick: () => void;
  bottleImg: string;
}

const Bottle: React.FC<BottleProps> = ({ isSpinning, finalRotation, onClick, bottleImg }) => {
  return (
    <IconButton disableRipple onClick={onClick}>
      <motion.img
        src={bottleImg}
        alt="bottle"
        style={{ width: "8vh", height: "24vh" }}
        animate={{
          rotate: isSpinning ? finalRotation : finalRotation
        }}
        transition={{
          duration: 4,
          ease: "easeInOut"
        }}
      />
    </IconButton>
  );
};

export default Bottle;
