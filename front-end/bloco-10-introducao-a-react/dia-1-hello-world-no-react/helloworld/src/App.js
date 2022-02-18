
// import React from 'react'; Exercicio 1
import './App.css';

// const Task = (value) => {
//   return (
//     <li key={value}>{value}</li>
//   );
// }

// const tarefas = ['Acordar', 'Almoçar', 'Escovar os dentes', 'Estudar'];

// class App extends React.Component {
//   render() {
//     return (
//       <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
//     );
//   }
// }

// export default App;


import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
