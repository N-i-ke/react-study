import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

//State コンポーネント　プロップスが更新された時、サイレンダリングされる
export const App = () => {
  //stateで状態管理　[num, setNum] = useState()　初期値,更新変数
  //関数の一番上でしか呼べない
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);

  const onClickCountUp = () => {
    setNum((prev) => {
      const newNum = prev + 1;

      if (newNum % 3 === 0) {
        if (!isShowFace) {
          setIsShowFace(true); // 状態変更が必要なときのみ変更
        }
      } else {
        if (isShowFace) {
          setIsShowFace(false); // 状態変更が必要なときのみ変更
        }
      }

      return newNum;
    });
  };
    useEffect(() => {
        console.log("=useeffect=")
    });
  

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* color messageでpropsを渡す */}
      <ColorfulMessage color="blue" message="大丈夫ですか" />
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="green" message="大丈夫です" />
      <ColorfulMessage color="blue">元気です。</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {/* && は左側がtrueならばそのまま表示それ以外は非表示 */}
      {isShowFace && <p>^_^</p>}
    </div>
  );
};
