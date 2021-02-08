import react from 'react';

// let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});
// let date = new Date().toDateString();

class Clock extends react.Component {

    constructor(props){
        super(props);
        this.state= {
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true}),
            date: new Date().toDateString()
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            ()=> this.tick(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    tick(){
        this.setState({
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})
        });
    }

    render(){
        return(
            <div className="date-time">
                <h1>{this.state.time}</h1>
                <h2>{this.state.date}</h2>
            </div>
        );
    }
    
}

export default Clock;