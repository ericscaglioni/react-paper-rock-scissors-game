import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            timer: 3
        };
  
        this.intervalId = undefined;
    }
  
    countingDown = () => {
        this.setState((prevState) => ({ timer: prevState.timer - 1 }));
        if(this.state.timer === 0) {
          clearInterval(this.intervalId);
          this.props.handleTimeOut();
        }
    };
  
    componentDidMount() {
      this.intervalId = setInterval(() => this.countingDown(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
  
    render() {
        return (
          <div>
            {this.state.timer !== 0 && <h1>{this.state.timer}</h1>}
          </div>
        );
    };
}