// components/MainScene.tsx
import { Box } from "@mui/material";
import Bottle from "./Bottle";
import { IUser } from "./IUser";
import UserList from "./UserList";

interface MainSceneProps {
  userList: IUser[];
  startSpinning: () => void;
  isSpinning: boolean;
  finalRotation: number;
  paths: {
    background: string;
    bottleImg: string;
    kissImg: string;
  };
}

const MainScene: React.FC<MainSceneProps> = ({
  userList,
  startSpinning,
  isSpinning,
  finalRotation,
  paths
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${paths.background})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
      }}>
      <Box
        sx={{
          width: "50vh",
          height: "50vh",
          position: "relative",
          borderRadius: "50%"
        }}>
        <UserList users={userList} kissImg={paths.kissImg} />
        <Box
          sx={{
            position: "absolute",
            top: "44%",
            left: "46%",
            transform: "translate(-50%, -50%)",
            zIndex: 1
          }}>
          <Bottle
            isSpinning={isSpinning}
            finalRotation={finalRotation}
            onClick={startSpinning}
            bottleImg={paths.bottleImg}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainScene;
