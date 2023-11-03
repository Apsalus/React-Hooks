import { Component, useState } from "react";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>start edting to see some magic happen!</h2>
      <button onClick={incrementItem}> Increment</button>
      <button onClick={decrementItem}> Decrement</button>
    </div>
  );
}

//리액트 훅이 나온 이유, 클래스와 차이점, 간단한 사용법

/*
class AppUgly extends React.Component{
  state = {
    item: 1
  }
  render(){
    const { item } = this.state;
    return(
      <div className="App">
      <h1>Hello {item}</h1>
      <h2>start edting to see some magic happen!</h2>
      <button onClick={this.incrementItem}> Increment</button>
      <button onClick={this.decrementItem}> Decrement</button>
    </div>
    );
  }
  incrementItem = () => {
    this.setItem(state => {
      return {
        item: state.item +1
      }
    })
  }
  decrementItem = () =>{
    this.setItem(state => {
      return {
        item: state.item -1
      }
    })
  }
}
*/

export default App;
