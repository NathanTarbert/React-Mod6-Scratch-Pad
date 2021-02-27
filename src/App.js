import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import Clock2 from './Clock2'
import Toggle from './Toggle';

function App() {
  // let guests = ['Bob', 'Sam'];
  return (
    <div className="App">
      <h1>Hello Nathan's App</h1>
      {/* <Greeting /> */}
     
      <Clock />
      <Clock2 />
      <Welcome name='Nate the great!'/>
      <Welcome name='Zelda'/>
      <Toggle />

      {/* <h2>Render all the guests</h2> */}
      {/* {
        guests.map(( guest ) => <Welcome name={guest}/> )
      } */}
    </div>
  );
}

export default App;