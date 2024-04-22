import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };
  const contentStyleB = {
    color: "blue",
    fontSize: "18px",
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* color messageでpropsを渡す */}
      <ColorfulMessage color="blue" message="大丈夫ですか" />
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="green" message="大丈夫です" />
      <ColorfulMessage color="blue">元気です。</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};
