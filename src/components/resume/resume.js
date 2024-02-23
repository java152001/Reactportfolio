import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let portData = this.props.portData;
        return (
            <React.Fragment>
                <section id="resume">
                    {/* Work
----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Experience</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>{portData.work.location2}</h3>
                                    <p className="info">{portData.work.position2} <span>•</span><em className="data">{portData.work.dateRange2}</em></p>
                                    <p>
                                        Developed their flagship web and windows application Bhive (<a href='https://www.go.inbhive.com/'>Check it out here</a>). Added a suite of new features such as a Virtual Office with full bodied 3D avatars and customizable reporting modules.  Our stack used primarily the following technologies:
                                    </p>
                                    <ul style={{ listStyleType: "disc"  }}>
                                        <li>HTML/CSS</li>
                                        <li>ASP.NET 6 w/Blazor Pages</li>
                                        <li>JavaScript/JQuery & TypeScript</li>
                                        <li>React</li>
                                        <li>ELM</li>
                                        <li>MSSQL</li>
                                        <li>C#/F#</li>
                                        <li>Virtualization w/ Docker</li>
                                        <li>Azure Cloud Services</li>
                                        <li>Jira</li>
                                        <li>Git Source Control</li>
                                    </ul>
                                    <p className="info"></p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>{portData.work.location1}</h3>
                                    <p className="info">{portData.work.position1} <span>•</span> <em className="date">{portData.work.dateRange1}</em></p>
                                    <p>
                                        Configured custom CMS loadouts for a diverse set of clients in the Travel Destination industry.  Received design assets and converted into drag and droppable custom design components for use with the companies' CMS.  Worked quickly and efficiently moving too new clients in 2 week intervals.  An example of a site I worked on can be seen here <a href='https://www.newzealand.com/us/'>https://www.newzealand.com/us/</a>
                                    </p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>{portData.work.location3}</h3>
                                    <p className="info">{portData.work.position3} <span>•</span> <em className="date">{portData.work.dateRange3}</em></p>
                                    <p>
                                        Working to usher in the next wave of development specialists.  Partnered with MIT, we lead a 9 month training program to teach web development to students through weekly lessons and concepts.  I lead a weekly office hours session to go over the material for that week and show more in depth examples and answer questions to help concepts stick.  Helped implement changes to the course to stay relevant in the fast moving world of web development with direct feedback on course curriculum.
                                    </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div>
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
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                </section>

            </React.Fragment>
        );
    }
}