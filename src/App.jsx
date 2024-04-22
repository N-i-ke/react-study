import { useState } from 'react';
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  //stateで状態管理　[num, setNum] = useState()　初期値,更新変数　
 //関数の一番上でしか呼べない
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num+1)
  }  
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
    </div>
  );
};
