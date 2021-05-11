import React, { Component } from 'react'
import './searchBar.css'



class SearchBar extends Component  {

   constructor(props) {
        super(props);


        this.state = {
            searchFor:''
        }

        this.searchClick = this.searchClick.bind(this)


   }
   

//______________________________ onCHANGE _____________________________
    inputChange (e) {
        
        this.setState({
            searchFor:e.target.value
        })
    }

 //_____________________________ onCLICK  _____________________________   
    searchClick(e) {
        
        this.props.onsearchClick(this.state.searchFor) //We send it to the app from here
    }

   
    render() {
        return (

                
            <div className="ui fluid action input searchBar-container">
            <input 
                type="text"
                placeholder="Search image..."
                onChange={this.inputChange.bind(this)}
                onKeyPress={(e) => {
                    if(e.key === 'Enter'){
                        this.searchClick()
                    }
                }}
             />
            <button 
                className="ui  icon teal button"
                onClick={this.searchClick}
                >
                 <i className="search icon"></i>     
            </button>
                
            </div>
        
            
        )
    }

}

export default SearchBar
