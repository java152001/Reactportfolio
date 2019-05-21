import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">
                                <li><a href="https://www.linkedin.com/in/anthony-demott-626b47165/"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="https://github.com/java152001"><i className="fa fa-github" /></a></li>
                            </ul>
                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </footer>

            </React.Fragment>
        );
    }
}