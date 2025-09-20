import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserList, setToggleRenderer } from "../../store/UserList";
import type { UserProfile } from "../../utils/types/types";
import { useApi } from "../../utils/useApi";
import type { AppDispatch } from "../../store/store";

export default function UserList() {
  const dispatch = useDispatch<AppDispatch>();
  const { status, data, error, refetch } = useApi<UserProfile[]>("/users");
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (status === "success" && data) {
      dispatch(setUserList(data));
      setFetched(true);
    }
  }, [status, data, dispatch]);

  if (status === "loading") return <p>Loading...</p>;

  if (status === "error") return <p>Error: {error}</p>;

  return (
    <div>
      {!fetched && (
        <button onClick={refetch} className="btn">
          Fetch Users
        </button>
      )}

      {fetched && (
        <button
          onClick={() => dispatch(setToggleRenderer(true))}
          className="btn"
        >
          Render Users
        </button>
      )}
    </div>
  );
}
