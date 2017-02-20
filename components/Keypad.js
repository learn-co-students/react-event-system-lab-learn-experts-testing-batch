const React = require('react');

class Keypad extends React.Component {
    constructor() {
        super();

        this.logger = this.logger.bind(this);
    }

    logger() {
        console.log('Entering password...');
    }

    render() {
        return (
            <input type="password" onKeyUp={this.logger} />
        )
    }
}

module.exports = Keypad;
