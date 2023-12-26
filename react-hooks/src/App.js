import { useEffect, useState } from 'react';
import { useInput } from './useInput';

const content = [
  {
    tab: "section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "section 2",
    content: "I'm the content of the Section 2"
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if(!allTabs || Array.isArray(allTabs)){
    
  }
  return{
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  //useState()
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  //useInput()
  const maxLen = (value) => value.length <= 10;
  const notAcess = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen, notAcess);
  //useTaps()
  const {currentItem , changeItem } = useTabs(0, content);
  //useEffect()
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, []);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}> Increment</button>
      <button onClick={decrementItem}> Decrement</button>
      <hr></hr>
      <input placeholder="Name" {...name} />
      <hr></hr>
      <div>
        {content.map((section, index) => (
          <button onClick={()=>changeItem(index)}>{section.tab}</button>
          ))}
      </div>
      <br></br>
      <div>
        {currentItem.content}
      </div>  
      <hr></hr>
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

export default App;
