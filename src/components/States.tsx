interface IProps {
  count: number;
}
export default function States(count: IProps) {
  return (
    <div className="bg-gray-400 text-white p-4 max-w-xl mx-auto rounded-2xl mt-5">
      <h1 className="text-4xl text-center my-4">Total</h1>
      <p className="text-5xl text-center">{count?.count}</p>
    </div>
  );
}
