import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import List from './components/list';
import Sort from './components/sort';
import Filter from './components/filter';
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

  handleChangeSort = e => {
    this.setState({ sortValue: e.target.value });
  };

  render() {
    console.log('App - rendered');
    return (
      <div className='grid-container'>
        <NavBar
          onChange={this.onChangeParent}
          value={this.searchQuery}
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Filter></Filter>
        <main className='paddingContent'>
          {/* <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
          <List /> */}
          <Sort onChange={this.handleChangeSort}></Sort>
          <Items
            searchQuery={this.state.searchQuery}
            sortValue={this.state.sortValue}
          ></Items>
        </main>
        <div className='footer'>
          <div>footer</div>
          <div>footer</div>
        </div>
      </div>
    );
  }
}

export default App;
