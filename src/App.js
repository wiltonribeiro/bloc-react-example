import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlocBuilder from "bloc-builder-react";
import CounterBloc from "./bloc/CounterBloc";

class App extends React.Component {

  constructor(props){
    super(props);
    this.bloc = new CounterBloc();
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />

            <BlocBuilder
                subject = {this.bloc.getCounterSubject()}
                builder = {(snapshot) => {
                  switch (!snapshot.error) {
                    case true:
                      return (
                          <div> The count has the current value of {snapshot.data}</div>
                      );
                    default :
                      return (<div>Error : <code>{snapshot.error}</code></div>);
                  }
                }}
            />

            <div className="App-buttons">
                <button onClick={this.bloc.increment}>Incriment</button>
                <button onClick={this.bloc.decrement}>Decrement</button>
                <button onClick={this.bloc.error}>Simulate error</button>
            </div>

          </header>
        </div>
    );
  }
}

export default App;
