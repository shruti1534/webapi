import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './loader';

class App extends React.Component {
    
    state = { Lat: null, errormsg: "" };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => (
                this.setState({ Lat: position.coords.latitude })
            ),

            err => (
                this.setState({ errormsg: err.message })
            ),
        );
    }

    render(){
        if(this.state.Lat && !this.state.errormsg){
            return <SeasonDisplay lat = {this.state.Lat} />;
        }
        if(!this.state.Lat && this.state.errormsg){
            return <div>Error: {this.state.errormsg} </div>;
        }
        return <div><Loader /></div>;
    };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);