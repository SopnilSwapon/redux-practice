import Counter from "./components/Counter";
import States from "./components/States";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { decrement, increment } from "./features/counters/countersSlice";

function App() {
  const values = useSelector((state: RootState) => state.counters);
  const dispatch = useDispatch();
  const handleIncrement = (currentId: number) => {
    dispatch(increment(currentId));
  };
  const handleDecrement = (currentId: number) => {
    dispatch(decrement(currentId));
  };
  const total = values.reduce((acc, c) => acc + c.value, 0);
  return (
    <>
      <h1 className="text-blue-500 text-4xl font-bold text-center mt-10">
        Simple Counter App
      </h1>
      {values.map((counter) => {
        return (
          <>
            <Counter
              key={counter.id}
              handleIncrement={() => handleIncrement(counter.id)}
              handleDecrement={() => handleDecrement(counter.id)}
              count={counter.value}
            />
          </>
        );
      })}
      <States count={total} />
    </>
  );
}

export default App;
