import React from 'react';


class Number extends React.Component{

    constructor (props){
        super (props);
        this.state = {value : 0};
      }

    render(){
        return(
            <h1>Number: 0 </h1>
        );
    }
}



export default Number;
