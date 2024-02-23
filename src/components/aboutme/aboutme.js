import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let portData = this.props.portData;
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src={portData.aboutMe.pic} alt="" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>Hi everyone! I'm a Full Stack Developer with 5 years of industry experience. When I'm not working I can be found playing with my kiddos or grinding away in an RPG.  I also 
                                love to cook and share my food with anyone who's hungry!
                            </p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>{portData.name}</span><br />
                                        <span>{portData.aboutMe.addressOne}<br />
                                            {portData.aboutMe.addressTwo}
            </span><br />
                                        <span>{portData.aboutMe.phoneNumber}</span><br />
                                        <span>{portData.aboutMe.email}</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href={portData.aboutMe.resumeLink} className="button">View Resume</a>
                                    </p>
                                </div>
                            </div> {/* end row */}
                        </div> {/* end .main-col */}
                    </div>
                </section>

            </React.Fragment>
        );
    }
}