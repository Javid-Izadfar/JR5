import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  //   console.log("hi", count, count2);

  // if count changed:
  useEffect(() => {
    console.log("count updated");
    // setCount2(count2 * 2);
  }, [count]);
  // useEffect(() => {
  //   console.log("count2 updated");
  //   setCount(count + 1);
  // }, [count2]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("foo");
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [count2]);

  const double = useMemo(() => {
    return count * 2;
  }, [count, count2]);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleClick2 = () => {
    setCount2(count2 + 1);
  };

  const getInputValue = () => {
    const input = document.getElementById("input");
    console.log("input", (input as any)?.value);
  };
  return (
    <div>
      <button onClick={handleClick}>increment {count}</button>
      <button onClick={handleClick2}>increment {count2}</button>
      double: {double}
      <input id="input" type="text" />
      <button onClick={getInputValue}>go</button>
    </div>
  );
};

export default Effect;
