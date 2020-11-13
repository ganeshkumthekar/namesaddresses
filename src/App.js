import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({ monsters: users}))
    }
    
    render(){
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter( monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase())
            );
        
            return(
            <div className='App'>
                <h1> Monsters Rolodex </h1>
                <SearchBox 
                placeholder='search monsters'
                handleChange={ e => this.setState({ searchField: e.target.value})} />

                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

export default App;