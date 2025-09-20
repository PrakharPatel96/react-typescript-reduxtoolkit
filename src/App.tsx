import { useSelector } from "react-redux";
import UserList from "./components/UserList/UserList";
import RenderList from "./components/RenderList/RenderList";
import { selectShowRenderer } from "./store/UserList/selectors";

function App() {
  const showRenderer = useSelector(selectShowRenderer);

  return (
    <>
      <div>{!showRenderer ? <UserList /> : <RenderList />}</div>
    </>
  );
}

export default App;
