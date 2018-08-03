import React, { Component } from 'react';
import Versiona from './Versiona';
import CheckBox from './CheckBox';
import './App.css';
import './index.css';

export default class Formbody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btnStyleLeft: 'appbtnleft1',
            btnStyleMid: 'appbtnmid',
            btnStyleRight: 'appbtnmid',
            pkgbtnStyleLeft: 'pkgbtnleft1',
            pkgbtnStyleRight: 'pkgbtnright',
        }
    }

    handleClickLeft = () => {
        this.setState({
            btnStyleLeft: 'appbtnleft1',
            btnStyleMid: 'appbtnmid',
            btnStyleRight: 'appbtnmid',
        });
    }
    handleClickMid = () => {
        this.setState({
            btnStyleLeft: 'appbtnleft',
            btnStyleMid: 'appbtnmid1',
            btnStyleRight: 'appbtnmid',
        });
    }
    handleClickRight = () => {
        this.setState({
            btnStyleLeft: 'appbtnleft',
            btnStyleMid: 'appbtnmid',
            btnStyleRight: 'appbtnmid1',
        });
    }
    handleClickPkgBtnLeft = () => {
        this.setState({
            pkgbtnStyleLeft: 'pkgbtnleft1',
            pkgbtnStyleRight: 'pkgbtnright',
        });
    }
    handleClickPkgBtnRight = () => {
        this.setState({
            pkgbtnStyleLeft: 'pkgbtnleft',
            pkgbtnStyleRight: 'pkgbtnright1',
        });
    }

    render() {
        return (
        <div className="formbody">
            <p className="formtitle">Select the options matching your project:</p>
            <p className="angver">Angular Version</p>
            <Versiona />
            <p className="appcomp">App Complecity</p>
            <button className={ this.state.btnStyleLeft } onClick={ this.handleClickLeft }>Basic</button>
            <button className={ this.state.btnStyleMid } onClick={ this.handleClickMid }>Medium</button>
            <button className={ this.state.btnStyleRight } onClick={ this.handleClickRight }>Advanced</button>
            <p className="ngu">ngUpgrade</p>
            <CheckBox />
            <p className="pkgmanage">Package Manager</p>
            <button className={ this.state.pkgbtnStyleLeft} onClick={ this.handleClickPkgBtnLeft }>npm</button>
            <button className={ this.state.pkgbtnStyleRight} onClick={ this.handleClickPkgBtnRight }>yarn</button>
            <button className="btnshow btnshowfont">Show me how to update!</button>
        </div>
    );
    }
}