import { useState } from "react";
import { Editor } from "./components/Editor";

export const App = () => {
  const [isEditable, setIsEditable] = useState(true);

  return <Editor isEditable={isEditable} setIsEditable={setIsEditable} />;
};

export default App;
