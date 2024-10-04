import { Avatar, Badge, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { IUser } from "./IUser";

interface UserProps {
  user: IUser;
  index: number;
  totalUsers: number;
  kissImg: string;
}

const User: React.FC<UserProps> = ({ user, index, totalUsers, kissImg }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "30%",
        left: "35%",
        transform: `rotate(${index * (360 / totalUsers)}deg) translate(32vh) rotate(-${
          index * (360 / totalUsers)
        }deg)`,
        transformOrigin: "center center"
      }}>
      <motion.button
        animate={user.isActive ? { scale: [1, 1.1, 1] } : {}}
        transition={
          user.isActive
            ? {
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }
            : {}
        }
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          outline: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
        <Badge
          badgeContent={
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
              <img src={kissImg} alt="kiss" style={{ width: "4vh", height: "4vh" }} />
              <Typography fontSize={16} fontWeight={600}>
                {user.countKiss}
              </Typography>
            </Box>
          }
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          overlap="circular">
          <Avatar src={user.avatar} alt={user.name} sx={{ width: "12vh", height: "12vh" }} />
        </Badge>
        <Typography p={1.4} fontWeight={600} fontSize={18}>
          {user.name}
        </Typography>
      </motion.button>
    </Box>
  );
};

export default User;
