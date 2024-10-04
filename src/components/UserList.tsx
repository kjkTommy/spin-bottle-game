import { IUser } from "./IUser";
import User from "./User";

interface UserListProps {
  users: IUser[];
  kissImg: string;
}

const UserList: React.FC<UserListProps> = ({ users, kissImg }) => {
  return (
    <>
      {users.map((user, index) => (
        <User key={user.id} user={user} index={index} totalUsers={users.length} kissImg={kissImg} />
      ))}
    </>
  );
};

export default UserList;
