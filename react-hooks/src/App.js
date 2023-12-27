import { useEffect, useState,useRef } from 'react';
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

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle)
  const updateTitle =  () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
}

const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if(element) {
      element.addEventListener("click", onClick);
    }
    return () =>  {
      if(element){
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return ref.current;
}

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
  //useTitle()
  const titleUpdater = useTitle("Loadding...");
  setTimeout(() => titleUpdater("Home"), 5000);
  //useClick()
  const sayHi = () => console.log("say hi");
  const title = useClick(sayHi);
  return (
    <div className="App">
      <h1>useState()</h1>
      <h2>Hello {item}</h2>
      <button onClick={incrementItem}> Increment</button>
      <button onClick={decrementItem}> Decrement</button>
      <hr></hr>
      <h1>useInput()</h1>
      <input placeholder="Name" {...name} />
      <hr></hr>
      <h1>useTaps()</h1>
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
      <h1>useEffect()</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
      <hr></hr>
      <h1>useClick</h1>
      <h2 ref={title}>Hi</h2>
    </div>
  );
}

export default App;
