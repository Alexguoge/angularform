import React, { Component } from 'react';
import './index.css';

export default class Versiona extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueleft: '5.2',
            valueright: '6.0',
        };

        this.handleChangeLeft = this.handleChangeLeft.bind(this);
        this.handleChangeRight = this.handleChangeRight.bind(this);
    }

    handleChangeLeft(event) {
        this.setState({valueleft: event.target.valueleft});
    }
    handleChangeRight(event) {
        this.setState({valueright: event.target.valueright});
    }

    render() {
        return (
            <form>
                    <select value={this.state.valueleft} onChange={this.handleChangeLeft} className="dropdownbtn">
                        <option value="2.0">2.0</option>
                        <option value="2.1">2.1</option>
                        <option value="2.2">2.2</option>
                        <option value="2.3">2.3</option>
                        <option value="2.4">2.4</option>
                        <option value="4.0">4.0</option>
                        <option value="4.1">4.1</option>
                        <option value="4.2">4.2</option>
                        <option value="4.3">4.3</option>
                        <option value="4.4">4.4</option>
                        <option value="5.0">5.0</option>
                        <option value="5.1">5.1</option>
                        <option value="5.2">5.2</option>
                        <option value="6.0">6.0</option>
                        <option value="7.0">7.0</option>
                        <option value="8.0">8.0</option>
                    </select>
                    <select value={this.state.valueright} onChange={this.handleChangeRight} className="dropdownbtn">
                        <option value="2.0">2.0</option>
                        <option value="2.1">2.1</option>
                        <option value="2.2">2.2</option>
                        <option value="2.3">2.3</option>
                        <option value="2.4">2.4</option>
                        <option value="4.0">4.0</option>
                        <option value="4.1">4.1</option>
                        <option value="4.2">4.2</option>
                        <option value="4.3">4.3</option>
                        <option value="4.4">4.4</option>
                        <option value="5.0">5.0</option>
                        <option value="5.1">5.1</option>
                        <option value="5.2">5.2</option>
                        <option value="6.0">6.0</option>
                        <option value="7.0">7.0</option>
                        <option value="8.0">8.0</option>
                    </select>
            </form>
        );
    }
}