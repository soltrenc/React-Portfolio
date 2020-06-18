import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-work" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Work</span>
                                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: 'url(images/waypoint.jpeg)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href=" https://ancient-dusk-51587.herokuapp.com/"> Waypoint </a></h3>
                                            <span> Chat App for Gamers </span>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: 'url(images/in2uned.png)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="http://quiet-thicket-75299.herokuapp.com/"> In2uned </a></h3>
                                            <span> Music Review Site </span>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                                <div className="project" style={{ backgroundImage: 'url(images/employeedir.jpeg)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://employeedirectory10.herokuapp.com/"> Employee Directory </a></h3>
                                            <span> Directory of Employees with Search Filteration </span>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                                <div className="project" style={{ backgroundImage: 'url(images/nutrifit.jpeg)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/soltrenc/NutriFit"> NutriFit</a></h3>
                                            <span> Nutrition Site with Geolocation </span>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: 'url(images/googlebooks.jpeg)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://googlebooksreact99.herokuapp.com/">Google Books Search</a></h3>
                                            <span> App using Google Books API </span>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: 'url(images/budgettracker.jpeg)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://budget-tracker9.herokuapp.com/">Budget Tracker</a></h3>
                                            <span> Budget Tracker App that works both Online/Offline</span>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}