import { useSelector, useDispatch } from "react-redux";
import { signin } from "./store/userSlice";
import { useState } from "react";

function App() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {user.id ? (
        <div>Зашёл</div>
      ) : (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => dispatch(signin({
            name: name,
            password: password,
          }))}>
            Принять
          </button>
        </div>
      )}
    </div>
  )
}

export default App;
