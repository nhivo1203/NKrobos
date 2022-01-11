import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robos: [],
            searchfield: ' '
        }
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robos: users}))
    }

    OnSearchChange = (e) => {
        console.log(e.target.value)
        this.setState({ searchfield: e.target.value })
    }

    render() {
        const filterSearch = this.state.robos.filter(robos => {
            return robos.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.robos.length === 0) {
          return (
            <div className="tc">
              <h1 className="f1">LOADING</h1>
            </div>
          )
        }

        return (
            <div className="tc">
              <h1 className="f1"> NKRobos </h1>
              <SearchBar onChange={this.OnSearchChange}/>
              <Scroll>
                <CardList robos = {filterSearch} />
              </Scroll>
            </div>
        );
    }
}

export default App;