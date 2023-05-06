import { useState } from "react";

function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);
  const handler = (event: { target: { value: any } }) => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handler, reset];
}

export default useInput;
