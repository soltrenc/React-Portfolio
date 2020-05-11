import React, { Component } from 'react'

export default class Timeline extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="timeline">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">Timeline</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2> Full Stack Web Development - Rutgers University <span>2019-2020 </span></h2>
                                                <p>  I graduated from the coding bootcamp at Rutgers University learning Full Stack Web Development </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2> Commissions Coordinator at Realogy <span>2018-present</span></h2>
                                                <p> For the past 2 years, I have been working to ensure the timely and accurate commission checks to agents when they sell properties in the Tri-State area, including Pennsylvania. I examine contracts of sale, listing agreements, leases and other closing documents. I also provide customer service while working with the offices which employ these agents. </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-5">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2> Life in Florida <span>2016-2018</span></h2>
                                                <p> I worked 3 temporary contract jobs ranging from accounting to just general administrative work, trying to find where I fit best in the industry. After my 3rd contract was over, I decided it was time for a change and relocated home to New Jersey to discover better opportunities within the finance industry.   </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none">
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
