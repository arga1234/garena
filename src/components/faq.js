import React, { Component } from 'react'

export class faq extends Component {
    render() {
        return (
            <div className="row container">
                <div className="col-12"><p className="titlePart">FAQ</p></div>
                <div className="col-12">
                    <span id="faq" dangerouslySetInnerHTML={{__html : this.props.faq.faq_content}}></span>
                </div>
            </div>
        )
    }
}

export default faq
