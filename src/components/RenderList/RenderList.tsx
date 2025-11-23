import { useSelector } from "react-redux";
import { selectUserList } from "../../store/UserList/selectors";
import { useState, useEffect } from "react";
import type { UserProfile } from "../../utils/types/types";

export default function RenderList() {
  const users = useSelector(selectUserList);
  const [searchedUser, setSearchedUser] = useState("");
  const [originalUsers, setOriginalUsers] = useState<UserProfile[]>();
  const [searchedUsersList, setSearchedUsersList] = useState<UserProfile[]>();

  const handleSearch = () => {
    if (searchedUser.trim() === "") {
      setSearchedUsersList(originalUsers);
      return;
    }
    const filteredUsers = originalUsers?.filter((ele) =>
      ele.name.toLowerCase().includes(searchedUser.toLowerCase())
    );
    setSearchedUsersList(filteredUsers);
  };

  useEffect(() => {
    setOriginalUsers(users);
    setSearchedUsersList(originalUsers);
  }, [users, originalUsers]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 2000);
    return () => clearTimeout(timer);
  }, [handleSearch, searchedUser]);

  return (
    <div>
      <h2>User Profiles</h2>
      <div style={{ display: "flex" }}>
        <input
          value={searchedUser}
          placeholder="Search Name here."
          onChange={(e) => {
            setSearchedUser(e.target.value);
          }}
        />
      </div>
      {searchedUsersList?.map((user) => (
        <div style={{ display: "flex" }} key={user.id}>
          <img src={user.photo} alt={user.name} width={50} />
          <p>
            {user.name} — {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}
