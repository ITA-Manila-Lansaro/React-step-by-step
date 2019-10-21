import React from 'react';


class Number extends React.Component{

    constructor (props){
        super (props);
        this.state = {value : 0};
      }

    render(){
        return(
            <div>
            <button onClick = {this.increaseNumber}>
                <h1>Hello World</h1>
            </button>
            <h1>Number: {this.state.value} </h1>
            </div>
        );
    }

    increaseNumber = () => {
        this.setState({value: this.state.value + 2});
      }
}



export default Number;
