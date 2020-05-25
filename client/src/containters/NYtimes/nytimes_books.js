import {Component} from 'react';
import * as types from '../../actions/nytimes/bookactions'

class NytimesBooks extends Component{
    constructor(){
        super();

        this.state ={
            books = [],
            searchText = ""
        }
    }
    handleChange = (event) =>{
        const{name,value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();

    }
    render(){
        const searchText = this.state
        return(
            <div>
                <h1>NY Times Best Sellers</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='searchText' value={searchText} onChange={this.handleChange}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}