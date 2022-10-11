import './App.css';
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'
//import { PostForm } from './components/PostForm';
//import './appStyles.css';
// import styles from './appStyles.module.css'
//import { Inline } from './components/Inline';
//import { Form } from './components/Form';
//import { PostList } from './components/PostList';
//import { StyleSheet } from './components/StyleSheet'
//import { NameList } from './components/NameList';
//import { UserGreeting } from './components/UserGreeting';
//import { ClickHandler } from './components/ClickHandler'
//import { Greet } from './components/Greet';
//import { Message } from './components/Message'
//import { ParentComponent } from './components/ParentComponent'


function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const changeHandler = (event) => {
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))
  }
  const filteredNames = NAMES.filter(item => {
    return item.first_name.includes(query) || item.last_name.includes(query)
  })
  return (
    <div className="App">
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet>
      <Message />*/
      }
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet /> */}
      {/* <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form /> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      <input type='text' value={inputValue} onChange={changeHandler} />
      {isPending && <p>Updating list...</p>}
      {
        filteredNames.map((item) => (
          <p key={item.id}>{item.first_name} {item.last_name}</p>
        ))
      }
    </div>
  );
}

export default App;
