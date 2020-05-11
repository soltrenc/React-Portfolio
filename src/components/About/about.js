import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me </span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>
                                                Full stack web developer with a background in finance. I graduated recently from the Full
                                                Stack Web
                                                Development Bootcamp at Rutgers University.
                                                Growing up, I played organized sports in basketball and baseball with interests in gaming.
                                                I received an academic scholarship to Northwood University located in West Palm Beach, FL
                                                where I
                                                went
                                                to obtain my Bachelors of Business Administration and majoring in Finance.
                </p>
                                            <p>
                                                So far, I've been working for a real estate company, working commissions basically ensuring
                                                all
                                                agents
                                                who
                                                sell properties across the Tri-State area, Pennsyvlania, and Connecticut get cut the right
                                                commission
                                                checks.
                </p>

                                            <p>
                                                Currently, I reside in Jersey City, NJ where I aspire to begin a new career in the tech
                                                industry as
                                                a web developer/software engineer.
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web Development </h3>
                                        <p>I have experience building websites using JavaScript,React,HTML,CSS, Jquery, MySQL, and MongoDB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3> Finance</h3>
                                        <p> Coming out of college with a Bachelor of Business Administration while majoring in Finance  </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3> Future Learning </h3>
                                        <p> Looking to learn Python, Swift, and others to help continue improving my software development skills </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}