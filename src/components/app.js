import React, { Component } from 'react'
import SearchBar from './searchBar/searchBar.js'
import './styleapp.css'
import axios from 'axios'
import ImageList from './images/imageList'



class App extends Component {


    state = {
        images : [],
        amount:15
    }

    selectChange(e) {
        
        this.setState({
            amount:e.target.value
        })

      console.log()
     }
   
 
    onsearchClick = async (searchFor) => {

        const accessKey = process.env.REACT_APP_ACCESSKEY;
        const result = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searchFor}&client_id=${accessKey}&per_page=${this.state.amount}`, {

        })
        console.log(result.data.results.length)
        
        this.setState({
            images : result.data.results
        })
    }




    render() {
        return (
            <div className="appContainer">
                <SearchBar onsearchClick={this.onsearchClick} />  

                <select className="selectStyle" onChange={this.selectChange.bind(this)}>
               
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={25}>25</option>
                    <option value={30}>30</option>
                    
                    
                </select>

                <ImageList images = {this.state.images} />
            </div> 
        )
    }
}

export default App;

