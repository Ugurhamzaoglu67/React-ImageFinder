import React, { Component } from 'react'
import SearchBar from './searchBar/searchBar.js'
import './styleapp.css'





class App extends Component {

    onsearchClick(searchFor) {
        console.log("app: "+searchFor)
    }


    render() {
        return (
            <div className="appContainer" >
                <SearchBar onsearchClick={this.onsearchClick} />
            </div>
        )
    }



};

export default App;
