import React, { Component } from 'react'
import '../App.scss';

export class timeline extends Component {
    render() {
        return (
            <div className="row container lightGreyBack">
                <div className="col-12">
                <p className="titlePart">Timeline</p>
                </div>
                <div className="col-12">
                    <div className="row timeline">
                        <div className="col-2 timelineAlign">
                            <p className="timelineTitle">Registration</p>
                            <img className="timelineImage"  src={require('../img/Timeline-1.png')}></img>
                            <p>{this.props.timeline.date_regis}</p>
                        </div>
                        <div className="col-1 hrPosition">
                            <hr></hr>
                        </div>
                        <div className="col-2 timelineAlign">
                            <p className="timelineTitle">Easy and CV Screening</p>
                            <img className="timelineImage"  src={require('../img/Timeline-2.png')}></img>
                            <p>{this.props.timeline.date_esay_cvscreen}</p>
                        </div>
                        <div className="col-1 hrPosition">
                        <hr></hr>
                        </div>
                        <div className="col-2 timelineAlign">
                            <p className="timelineTitle">On-campus Interview</p>
                            <img className="timelineImage"  src={require('../img/Timeline-3.png')}></img>
                            <p>{this.props.timeline.date_interview}</p>
                        </div>
                        <div className="col-1 hrPosition">
                        <hr></hr>
                        </div>
                        <div className="col-2 timelineAlign">
                            <p className="timelineTitle"> Announcement of Selected Scholars</p>
                            <img className="timelineImage"  src={require('../img/Timeline-4.png')}></img>
                            <p>{this.props.timeline.date_announce}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default timeline
