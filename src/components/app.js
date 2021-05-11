import React, { Component } from 'react'
import SearchBar from './searchBar/searchBar.js'
import './styleapp.css'
import axios from 'axios'


class App extends Component {


    state = {
        images : []
    }

    onsearchClick = async (searchFor) => {
       const result = await axios.get("https://api.unsplash.com/photos/?client_id=G8KSg2m5YBTXtTKEUv7hGyPRVsSXlwwdUBCZSgeRHxU", {

            params : {
                query : searchFor
            }

        })
        
        console.log(result.data.length)
       this.setState({
           images : result.data
       })
    }




    render() {
        return (

          
            <div className="appContainer">
                <SearchBar onsearchClick={this.onsearchClick} />
               
                <div>
                    {this.state.images.length}
                </div>
            </div>
      
        )
    }



}

export default App;
