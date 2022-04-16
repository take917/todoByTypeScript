import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-96 mx-auto p-20">
      <h1 className="text-xl font-bold">Todo</h1>
      <div className="flex gap-x-2">
        <input type="text" className="border border-black" />
        <button className="border border-black shrink-0 px-2">追加</button>
      </div>
      <ul className="mt-4 space-y-2">
        <li>
          <label className="flex item-center gap-x-2">
            <input type="checkbox" />
            <span>TODO1</span>
          </label>
        </li>
        <li>
          <label className="flex item-center gap-x-2">
            <input type="checkbox" />
            <span>TODO2</span>
          </label>
        </li>
        <li>
          <label className="flex item-center gap-x-2">
            <input type="checkbox" />
            <span>TODO3</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Home;
