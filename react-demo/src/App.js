import './App.css';
import { UserGreeting } from './components/UserGreeting';
//import { ClickHandler } from './components/ClickHandler'
//import { Greet } from './components/Greet';
//import { Message } from './components/Message'
//import { ParentComponent } from './components/ParentComponent'


function App() {
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
      <UserGreeting />
    </div>
  );
}

export default App;
