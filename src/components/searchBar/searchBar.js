import React, { Component } from 'react'
import './searchBar.css'



class SearchBar extends Component  {

    /*  Second method for bind
    contructor(props) {   
        super(props)
        this.state = {
            searchFor:''
        }
        this.inputChange = this.inputChange.bind(this)    
    }  
    */





    state = {
        searchFor:''
    }


    inputChange (e) {
        
        this.setState({
            searchFor:e.target.value
        })
    }



   
    render() {
        return (

            <div className="ui searchBar-container category search">
                <div className="ui icon input" style={{width:'100%'}}>
                    <input 
                    className="prompt" 
                    type="text" 
                    placeholder="Search images..." 
                    onChange={this.inputChange.bind(this)}
                    />
                   
                   
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div> 
        )
    }

}

export default SearchBar
