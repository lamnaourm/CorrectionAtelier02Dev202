import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

var etudiants = [
  { nom: "Manar", math: 10.5, phys: 12.0, fr: 16.0 },
  { nom: "Mohamed", math: 13.0, phys: 18.0, fr: 7.0 },
  { nom: "Khalid", math: 15.0, phys: 15.0, fr: 13.0 },
  { nom: "Ikbal", math: 2.6, phys: 9.0, fr: 10.0 },
  { nom: "Aziz", math: 10.0, phys: 11.5, fr: 15.0 },
  { nom: "Said", math: 12.0, phys: 5.0, fr: 13.0 },
  { nom: "Moujahid", math: 20.0, phys: 15.0, fr: 18.0 },
  { nom: "Riyad", math: 18.0, phys: 13.0, fr: 15.0 },
];

function Liste1() {
  return <ul>
      {etudiants.map(item => <li>{item.nom} - Moyenne : {((item.math+item.phys+item.fr)/3).toFixed(2)} </li>)}
  </ul>
}

class Liste2 extends Component {
  render(){
    return <table>
      <tr>
        <th>Nom</th>
        <th>Math</th>
        <th>Phys</th>
        <th>Fr</th>
        <th>Moyenne</th>
      </tr>
      {etudiants.map(item => 
          <tr>
            <td>{item.nom}</td>
            <td>{item.math}</td>
            <td>{item.phys}</td>
            <td>{item.fr}</td>
            <td>{((item.math+item.phys+item.fr)/3).toFixed(2)}</td>
          </tr>
        )}
    </table>
  }
}

function App() {
  return <div>
    <Liste1 />
    <Liste2 />
  </div>;
}

export default App;
