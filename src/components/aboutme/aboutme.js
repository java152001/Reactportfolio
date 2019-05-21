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
                            <p>Hi everyone! I'm an aspiring Full Stack Developer with emphasis on Front End technologies and skills. I have 
                                recently graduated from the University of Arizona full stack boot camp and am looking to put my newfound skills
                                into practice.  When I'm not working on coding I can be found binging anime or grinding away in an RPG.  I also 
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
                                        <a href={portData.aboutMe.resumeLink} className="button"><i className="fa fa-download" />Download Resume</a>
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