import React, { Component, useState } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import List from './components/list';
import Items from './components/items';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log('App.js constructor');
  }

  componentDidMount() {
    console.log('App - mounted');
  }

  // const [searchQuery, setSearchQuery] = useState('');

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log('Event handler called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  onChangeParent = e => {
    let searchQuery = e.target.value.toLowerCase();
    this.setState({ searchQuery });
  };

  render() {
    console.log('App - rendered');
    return (
      <React.Fragment>
        <NavBar
          onChange={this.onChangeParent}
          value={this.searchQuery}
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
          <List />
          <Items searchQuery={this.state.searchQuery}>
            {console.log('this.state.searchQuery', this.state.searchQuery)}
          </Items>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
