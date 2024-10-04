import { useState } from "react";
import { IUser, users } from "./components/IUser";
import MainScene from "./components/MainScene";

const paths = {
  background: "src/assets/images/background.jpg",
  bottleImg: "src/assets/images/Bottle.png",
  kissImg: "src/assets/images/Kiss.png"
};

function App() {
  const [userList, setUserList] = useState<IUser[]>(users);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [finalRotation, setFinalRotation] = useState<number>(0);

  const startSpinning = () => {
    const randomCircle = Math.floor(Math.random() * userList.length);
    const randomAngle = Math.floor(Math.random() * 360);
    const finalAngle = randomAngle + 360 * randomCircle;
    if (isSpinning) return;

    setUserList((prevUserList) => {
      const updatedUserList = [...prevUserList];
      updatedUserList.forEach((user) => {
        user.isActive = false;
      });
      return updatedUserList;
    });
    setFinalRotation(finalAngle);
    setIsSpinning(true);

    setTimeout(() => {
      const finalAngleNormalized = finalAngle % 360;
      let activeUserId = 0;

      switch (true) {
        case finalAngleNormalized >= 0 && finalAngleNormalized < 36:
          activeUserId = 1;
          break;
        case finalAngleNormalized >= 36 && finalAngleNormalized < 72:
          activeUserId = 2;
          break;
        case finalAngleNormalized >= 72 && finalAngleNormalized < 108:
          activeUserId = 3;
          break;
        case finalAngleNormalized >= 108 && finalAngleNormalized < 144:
          activeUserId = 4;
          break;
        case finalAngleNormalized >= 144 && finalAngleNormalized < 180:
          activeUserId = 5;
          break;
        case finalAngleNormalized >= 180 && finalAngleNormalized < 216:
          activeUserId = 6;
          break;
        case finalAngleNormalized >= 216 && finalAngleNormalized < 252:
          activeUserId = 7;
          break;
        case finalAngleNormalized >= 252 && finalAngleNormalized < 288:
          activeUserId = 8;
          break;
        case finalAngleNormalized >= 288 && finalAngleNormalized < 324:
          activeUserId = 9;
          break;
        case finalAngleNormalized >= 324 && finalAngleNormalized < 360:
          activeUserId = 10;
          break;
        default:
          break;
      }

      // Устанавливаем активного пользователя
      setUserList((prevList) =>
        prevList.map((user) => ({
          ...user,
          isActive: user.id === activeUserId
        }))
      );

      setTimeout(() => {
        setIsSpinning(false); // Останавливаем вращение
        setUserList((prevList) => prevList.map((user) => ({ ...user, isActive: false })));
      }, 4000);
    }, 4000);
  };

  return (
    <MainScene
      userList={userList}
      startSpinning={startSpinning}
      isSpinning={isSpinning}
      finalRotation={finalRotation}
      paths={paths}
    />
  );
}

export default App;
