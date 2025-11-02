import Counter from "./components/Counter";
import States from "./components/States";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { decrement, increment } from "./features/counters/countersSlice";
import { useEffect } from "react";
import { fetchPosts } from "./features/posts/postsSlice";

function App() {
  const { counters, posts } = useSelector((state: RootState) => state);
  const total = counters.reduce((acc, c) => acc + c.value, 0);
  const dispatch = useDispatch();
  const handleIncrement = (currentId: number) => {
    dispatch(increment(currentId));
  };
  const handleDecrement = (currentId: number) => {
    dispatch(decrement(currentId));
  };
  useEffect(() => {
    dispatch(fetchPosts() as never);
  }, [dispatch]);
  return (
    <>
      <h1 className="text-blue-500 text-4xl font-bold text-center mt-10">
        Simple Counter App
      </h1>
      {counters.map((counter) => {
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
      {posts.isLoading ? (
        <h2 className="text-center max-w-xl mx-auto">Loading.......</h2>
      ) : (
        <div className="mt-10 max-w-xl mx-auto">
          {posts.isError ? (
            <p className="text-red-600 text-center">
              {posts.error || "Something is wrong"}
            </p>
          ) : (
            <>
              {posts.post.length === 0 ? (
                <p className="text-center">No Data Found</p>
              ) : (
                <>
                  {posts.post.map((p) => (
                    <div key={p.id}>
                      <h1 className="text-2xl font-bold">{p.title}</h1>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
