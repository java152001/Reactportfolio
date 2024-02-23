import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check Out Some of My Works.</h1>
                            {/* portfolio-wrapper */}
                            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" title>
                                            <img className='logo' alt src="images/portfolio/logo.svg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Bhive</h5>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-02" title>
                                            <img alt src="images/portfolio/retrocam.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Visit New Zealand</h5>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-03" title>
                                            <img alt src="images/portfolio/d20red.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Tabletop Trove</h5>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                            </div> {/* portfolio-wrapper end */}
                        </div> {/* twelve columns end */}
                        {/* Modal Popup
	      --------------------------------------------------------------- */}
                        <div id="modal-01" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-boardgame.jpg" alt />
                            <div className="description-box">
                                <h4>Bhive</h4>
                                <p>Connect with your co-workers across the country and world.</p>
                                <span className="categories"><i className="fa fa-tag" />Connection Platforms</span>
                            </div>
                            <div className="link-box">
                                <a href="https://www.go.inbhive.com/" target="_blank">Live Site</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-01 End */}
                        <div id="modal-02" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt />
                            <div className="description-box">
                                <h4>Visit New Zealand</h4>
                                <p>One Example of the different designs I created while working with Simpleview</p>
                                <span className="categories"><i className="fa fa-tag" />Design</span>
                            </div>
                            <div className="link-box">
                                <a href="https://www.newzealand.com/us/" target="_blank">Live Site</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-02 End */}
                        <div id="modal-03" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-pikachu.jpg" alt />
                            <div className="description-box">
                                <h4>Tabletop Trove</h4>
                                <p>Built with NextJS/Sqlite/Sanity.IO an app to track your board game collection.  Pulls from Boardgamegeeks vast data of available board games with authentication built in.</p>
                                <span className="categories"><i className="fa fa-tag" />Fun!, Game</span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/java152001/Tabletoptrove"><i class="fa fa-github-square"></i></a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-03 End */}                    
                    </div> {/* row End */}
                </section>

            </React.Fragment>
        );
    }
}