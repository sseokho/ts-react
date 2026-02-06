import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootState, 증가, 감소, 맘대로증가 } from "./index"
import { Dispatch } from 'redux';


function App() {
  const 꺼내온거 = useSelector( (state :RootState) => state );
  const dispatch :Dispatch = useDispatch();

  let [user,setUser] = useState('kim');

  return (
    <div className="App">
      {꺼내온거.counter1.count}
      <button onClick={()=>{dispatch(증가())}}>증가</button>
      <Profile name="철수"></Profile>
    </div>
  );
}

function Profile(props :{name:string}): React.JSX.Element {
  return(
    <div>{props.name}</div>
  )
}
export default App;
