interface IProps {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}
export default function Counter({
  handleDecrement,
  handleIncrement,
  count,
}: IProps) {
  return (
    <div>
      <div className="bg-gray-400 text-white p-4 max-w-xl mx-auto rounded-2xl mt-5">
        <h1 className="text-4xl text-center my-4">{count}</h1>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleIncrement}
            className="bg-blue-700 p-2 cursor-pointer  rounded-2xl px-4"
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="bg-red-700 p-2 rounded-2xl px-4 cursor-pointer"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
