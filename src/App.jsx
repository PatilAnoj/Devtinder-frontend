import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<div>login</div>} />
            <Route path="/profile" element={<div>profile</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
