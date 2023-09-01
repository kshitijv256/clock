import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
        <span className="text-9xl font-bold text-amber-400">
          {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
        </span>
      </div>
    </>
  );
}

export default App;
