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
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" title>
                                            <img alt src="images/portfolio/boardgame.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Game On</h5>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-02" title>
                                            <img alt src="images/portfolio/pokeballs.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Pokemon Click Game</h5>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-03" title>
                                            <img alt src="images/portfolio/friends.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Friend Finder</h5>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-04" title>
                                            <img alt src="images/portfolio/pokemon.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Pokemon Quiz</h5>
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
                                <h4>Game On</h4>
                                <p>Love board games? Need people to play? Use our app to schedule meet ups!</p>
                                <span className="categories"><i className="fa fa-tag" />Meet Up Apps</span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/kgdowney/GameOn" target="_blank"><i class="fa fa-github-square"></i></a>
                                <a href="https://gameon20201.herokuapp.com/" target="_blank">   Live Site</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-01 End */}
                        <div id="modal-02" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt />
                            <div className="description-box">
                                <h4>Pokemon Click Game</h4>
                                <p>Test your memory! Coded in React, can you remember which ones you haven't clicked yet?</p>
                                <span className="categories"><i className="fa fa-tag" />Pokemon, Web Development</span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/java152001/ClickyGame"><i class="fa fa-github-square"></i></a>
                                <a href="https://pokemonclick20201.herokuapp.com/" target="_blank">   Live Site</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-02 End */}
                        <div id="modal-03" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt />
                            <div className="description-box">
                                <h4>Friend Finder</h4>
                                <p>Answer some personality questions to find your ideal animated pal!</p>
                                <span className="categories"><i className="fa fa-tag" />Fun!</span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/java152001/friendfinder"><i class="fa fa-github-square"></i></a>
                                <a href="https://friendfinder20201.herokuapp.com/" target="_blank">   Live Site</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-03 End */}
                        <div id="modal-04" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-pikachu.jpg" alt />
                            <div className="description-box">
                                <h4>Pokemon Trivia</h4>
                                <p>Javascript/JQuery game designed to test your knowledge of pokemon.</p>
                                <span className="categories"><i className="fa fa-tag" />Fun!, Game</span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/java152001/TriviaGame"><i class="fa fa-github-square"></i></a>
                                <a href="https://java152001.github.io/TriviaGame/" target="_blank">   Live Site</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-04 End */}                    </div> {/* row End */}
                </section>

            </React.Fragment>
        );
    }
}