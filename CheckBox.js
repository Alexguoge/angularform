import React, { Component } from 'react';
import './index.css';

export default class CheckBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            upGrade: false
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            upGrade: value
        });
    }

    render() {
        return (
            <label>
                <input className="chkbox"
                    type="checkbox"
                    checked = {this.state.upGrade}
                    onChange={this.handleChange} />
                I use ngUpgrade
            </label>
        )
    }
}