import avatar1 from "../assets/10 profile pictures/Regular face 1.png";
import avatar10 from "../assets/10 profile pictures/Regular face 10.png";
import avatar2 from "../assets/10 profile pictures/Regular face 2.png";
import avatar3 from "../assets/10 profile pictures/Regular face 3.png";
import avatar4 from "../assets/10 profile pictures/Regular face 4.png";
import avatar5 from "../assets/10 profile pictures/Regular face 5.png";
import avatar6 from "../assets/10 profile pictures/Regular face 6.png";
import avatar7 from "../assets/10 profile pictures/Regular face 7.png";
import avatar8 from "../assets/10 profile pictures/Regular face 8.png";
import avatar9 from "../assets/10 profile pictures/Regular face 9.png";
import bottleImg from "../assets/images/Bottle.png";

export interface IUser {
  id: number;
  name: string;
  isSpinning: boolean;
  isActive: boolean;
  avatar: string;
  countKiss: number;
  userAngle: number;
}
export interface IBottle {
  name: string;
  img: string;
}
export const Bottle: IBottle = {
  name: "Bottle",
  img: bottleImg
};
export const users: IUser[] = [
  {
    id: 1,
    name: "User 1",
    isSpinning: false,
    isActive: false,
    avatar: avatar1,
    countKiss: 0,
    userAngle: 0
  },
  {
    id: 2,
    name: "User 2",
    isActive: false,
    isSpinning: false,
    avatar: avatar2,
    countKiss: 0,
    userAngle: 36
  },
  {
    id: 3,
    name: "User 3",
    isActive: false,
    avatar: avatar3,
    isSpinning: false,
    countKiss: 0,
    userAngle: 72
  },
  {
    id: 4,
    name: "User 4",
    isActive: false,
    avatar: avatar4,
    isSpinning: false,
    countKiss: 0,
    userAngle: 108
  },
  {
    id: 5,
    name: "User 5",
    isActive: false,
    avatar: avatar5,
    isSpinning: false,
    countKiss: 0,
    userAngle: 144
  },
  {
    id: 6,
    name: "User 6",
    isActive: false,
    isSpinning: false,
    avatar: avatar6,
    countKiss: 0,
    userAngle: 180
  },
  {
    id: 7,
    name: "User 7",
    isActive: false,
    isSpinning: false,
    avatar: avatar7,
    countKiss: 0,
    userAngle: 216
  },
  {
    id: 8,
    name: "User 8",
    isActive: false,
    isSpinning: false,
    avatar: avatar8,
    countKiss: 0,
    userAngle: 252
  },
  {
    id: 9,
    name: "User 9",
    isActive: false,
    avatar: avatar9,
    isSpinning: false,
    countKiss: 0,
    userAngle: 288
  },
  {
    id: 10,
    name: "User 10",
    isActive: false,
    avatar: avatar10,
    isSpinning: false,
    countKiss: 0,
    userAngle: 324
  }
];
