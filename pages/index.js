import React from 'react';
import '../src/DigitalClock'
import DigitalClock from '../src/DigitalClock';

class Index extends React.Component {


    static async getInitialProps() {
        const promise = new Promise((resolve, reject) =>
            setInterval(() => resolve({
                time: new Date().toISOString()
            }), 3000)
        );

        return promise;
    }

    constructor(props) {
        super(props);
        this.state = {
            time: props.time
        }
    }

    tick() {
        this.setState(() => {
            return ({
                time: new Date().toLocaleString()
            });
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return <DigitalClock time={this.state.time} />;
    }
}

export default Index;