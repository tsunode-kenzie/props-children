import './App.css';
import Button, { teste } from './components/Button';
import Main from './components/Main';
import Profile from './components/Profile';

function App() {
  const people = [
    {
      name: 'Gabriel',
      age: 25,
      stack: ['node', 'react']
    },
    {
      name: 'Vilson',
      age: 27,
      stack: ['php', 'javascript']
    },
    {
      name: 'Alex',
      age: 31,
      stack: ['next', 'javascript']
    },
    {
      name: 'Daniel',
      age: 23
    },
  ];

  return (
    <Main>
      <h1>Teste</h1>

      <Button type="submit">
        <img src="" alt="" />
        Clique aqui
      </Button>


      {
        people.map((person, index) =>
          <Profile
            key={index}
            name={person.name}
            age={person.age}
            stack={person.stack}
          />
        )
      }
    </Main>
  );
}

export default App;
