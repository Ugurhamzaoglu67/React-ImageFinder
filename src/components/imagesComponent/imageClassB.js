import React, { Component } from 'react'




class Image extends Component {

    constructor(props) {
        super(props)
        this.state = {
            spanCount:1
        }
        this.myRef = React.createRef();
    }

    componentDidMount() {
       
        this.myRef.current.addEventListener('load', () => {
            const spanCount = parseInt(this.myRef.current.clientHeight / 5)

            this.setState({
                spanCount
            })
        })
    }

    render() {

        const  {img}  = this.props
        
        return(
            <img 
            style={{
                gridRowEnd:`span ${this.state.spanCount}`
            }}
            ref={this.myRef} src={img.urls.small} alt={img.alt_description} />

        )

    }
}

export default Image