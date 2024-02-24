import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let portData = this.props.portData;
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap" class="opaque">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show  navigation</a>
                        <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                        </ul> {/* end #nav */}
                    </nav> {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I'm {portData.name}</h1>
                            <h3>I'm a <span>Full Stack Developer</span> looking to join your team! Let's <a className="smoothscroll" href="#about">start scrolling </a>
                                and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                            <hr />
                            <ul className="social">                              
                                <li><a href="https://www.linkedin.com/in/anthony-demott-626b47165/"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="https://github.com/java152001"><i className="fa fa-github" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}