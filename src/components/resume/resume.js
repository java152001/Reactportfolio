import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let portData = this.props.portData;
        return (
            <React.Fragment>
                <section id="resume">
                    {/* Education
----------------------------------------------- */}
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>{portData.education.university}</h3>
                                    <p className="info">{portData.education.program} <span>•</span> <em className="date">{portData.education.endDate}</em></p>
                                    <p>
                                        Rigourous 6 month program learning the intricacies of the MERN Stack.  Developed many proof of concept applications
                                        demonstrating high level understanding of concepts and technologies.  Worked on 3 full stack applications in group to
                                        simulate on the job group development.  Presented final project to industry professionals to show understanding and ability
                                        to talk to the work we had done.
          </p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Technologies Learned</h3>
                                        <p>
                                            <ul style={{ listStyleType: "disc"  }}>
                                                <li>HTML/CSS</li>
                                                <li>BootStrap, Material-UI and Other Design Frameworks</li>
                                                <li>Javascript & JQuery</li>
                                                <li>NodeJS</li>
                                                <li>MySQL & MongoDB</li>
                                                <li>Express</li>
                                                <li>ReactJS</li>
                                                <li>Git Source Control</li>

                                            </ul>
                                        </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>{portData.work.location2}</h3>
                                    <p className="info">{portData.work.postion2} <span>•</span><em className="data">{portData.work.dateRange2}</em></p>
                                    <p>
                                        Assisted a group of brand new web developers! Responsible for demonstrating techniques and best practices in order to help students build an understanding of web dev technologies. Helped with fostering solutions to their ideas as for new applications.
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>{portData.work.location1}</h3>
                                    <p className="info">{portData.work.position1} <span>•</span> <em className="date">{portData.work.dateRange1}</em></p>
                                    <p>
                                        Managed teams of 15 to 20 agents to help them achieve personal and
                                        team metrics at the highest level. Demonstrated exceptional
                                        communication skills to provide unique coaching to maximize
                                        performance.
                                    </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div>
                </section>

            </React.Fragment>
        );
    }
}