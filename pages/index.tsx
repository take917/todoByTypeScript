import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-96 mx-auto p-20">
      <h1 className="text-xl font-bold">Todo</h1>
      <div>
        <input type="text" className="border border-black" />
        <button className="border border-black">ボタン</button>
      </div>
      <ul>
        <li>TODO1</li>
        <li>TODO2</li>
        <li>TODO3</li>
      </ul>
    </div>
  );
};

export default Home;
