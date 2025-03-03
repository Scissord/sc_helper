import { useState } from 'react';
import Counter from './components/Counter.jsx';
import ChevronDown from './icons/ChevronDownIcon.jsx'
import ChevronUp from './icons/ChevronUp.jsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [array, setArray] = useState([
    {
      id: 1,
      title: 'ZOOM',
      cards: [
        {
          id: 1,
          content: 'qwewqe 1'
        },
        {
          id: 2,
          content: 'qwewqe 2'
        },
      ]
    },
    {
      id: 2,
      title: 'Отметить',
      cards: [
        {
          id: 3,
          content: 'контент 3'
        }
      ]
    }
  ]);

  function handleChangeIsOpen() {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Counter
        title={title}
        setTitle={setTitle}
        label="привет"
      />

      {isOpen ? (
        <ChevronUp
          handleChangeIsOpen={handleChangeIsOpen}
        />
      ) : (
        <ChevronDown
          handleChangeIsOpen={handleChangeIsOpen}
        />
      )}

      {array.map(list => (
        <div style={{ border: '1px solid black' }}>
          {list.title}
          {list.cards.map(card => (
            <div>
              {card.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default App;





















// import { useState } from 'react';

// function App() {
//   const [input, setInput] = useState("123");




  // function handleChangeInput(result) {
  //   setInput(result)
  // }

//   return (
//     <div>
//       <p>{isOpen}</p>
//       <button onClick={() => handleChangeIsOpen(isOpen === "true" ? "false" : "true")}>
//         Изменить состояние
//       </button>
//       <input
//         value={input}
//         onChange={(e) => handleChangeInput(e.target.value)}
//       />
//     </div>
//   )
// }

// export default App
