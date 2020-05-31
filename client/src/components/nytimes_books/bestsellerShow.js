import React from 'react';
import { fectchBook } from '../../actions/nytimes/bookactions';
import {connect} from 'react-redux';

class BestsellerShow extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        debugger
    }

    render(){
        return(
            <div></div>
        )
    }
}

    const mapStateToProps = (state) => {
        return{
            book_data: state.bookReducer.book_data
        }
    }

export default connect(mapStateToProps)(BestsellerShow);