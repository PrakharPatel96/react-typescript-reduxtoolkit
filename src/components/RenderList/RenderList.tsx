import { useSelector } from "react-redux";
import { selectUserList } from "../../store/UserList/selectors";

export default function RenderList() {
  const users = useSelector(selectUserList);

  return (
    <div>
      <h2>User Profiles</h2>
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.photo} alt={user.name} width={50} />
          <p>
            {user.name} — {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}
