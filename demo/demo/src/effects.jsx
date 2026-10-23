
import { useEffect, useState } from "react";

const Effects = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(21);

  useEffect(() => {
    console.log("Effect happens");
  }, [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleIncreaseAge = () => {
    setAge(age + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleDecreaseAge = () => {
    setAge(age - 1);
  };

  return (
    <div>
      <h1>This is a State Component</h1>

      <button onClick={handleIncrease}>+</button>
      <h2> {count}</h2>
      <button onClick={handleDecrease}>-</button>

      <button onClick={handleIncreaseAge}>+</button>
      <h2> {age}</h2>
      <button onClick={handleDecreaseAge}>-</button>
    </div>
  );
};

export default Effects;
