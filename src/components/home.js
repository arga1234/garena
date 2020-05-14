import React, { Component } from 'react'
import Testimony from './testimony'
import PartnerUniversities from './partnerUniversities'
import Timeline from './timeline'
import Faq from './faq'
import { connect } from 'react-redux';
import { fetchAllWebContent } from '../actions/allWebContentActions';
import '../App.scss';

export class home extends Component {
    componentDidMount(){
        this.props.dispatch(fetchAllWebContent());
    }
    render() {
        const { error, loading, items } = this.props;
        
        const program_content = items.map((item, index)=>{
            return(
                <p className="descriptionText" key={index}>{item.program_content}</p>
            )
        })

        const freshman_program = items.map((item, index)=>{
            return(
                <span id="positionRequirement" key={index} dangerouslySetInnerHTML={{__html : item.freshman_program}}></span>
            )
        })

        const senior_program = items.map((item, index)=>{
            return(
                <span id="positionRequirement"  key={index} dangerouslySetInnerHTML={{__html : item.senior_program}}></span>
            )
        })

        const timeline = items.map((item, index)=>{
            return(
                <Timeline key={index} timeline={item}></Timeline>
            )
        })

        const faq = items.map((item, index)=>{
            return(
                <Faq key={index} faq={item}></Faq>
            )
        })

        if(loading){
            return (<div className="row">
                <div className="col-12" style={{textAlign:"center"}}>
                <p>Loading Content ...</p>
                </div>
            </div>)
        }
        if(error){
            return (<div className="row">
                <div className="col-12" style={{textAlign:"center"}}>
                <p>Error! {error.message}</p>
                </div>
            </div>)
        }
        
        return (
            <div className="row">
                <div class="topnav" id="myTopnav">
                <img className="logo" src={require('../img/Sea-Undergraduate-Logo.png')}></img>
                <a href="#faqsec">FAQ</a>
                <a href="#applyhere">Apply Here</a>
                <a href="#program">Program</a>
                <a href="#home">Home</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <p style={{margin:"0px"}}>=</p>
                </a>
                </div>
                <div id="home" className="col-12" style={{position:"relative", padding : "0px"}}>
                <img  style={{width: '100%'}} src={require('../img/BG-Head.jpg')}></img>
                <div className="row content1 container">
                <div className="col-6 wrapper1">
                    <p className="WhiteBigText"><b>Congratulations Sea Scholarship 2019 Awardess!</b></p>
                    <p className="WhiteSmallText">The Sea Scholarship Committee is proud to announce the 2019 Academic Year Sea Scholarship recipients. Final award email notifications were sent on October 17, 2019</p>
                </div>
                <div className="col-6" style={{textAlign:"center"}}>
                    <img className="hatLogo" src={require('../img/icon-graduate.png')}></img>
                </div>
                </div>
                </div>

                <div className="row container lightGreyBack">
                  <div id="program" className="col-12">
                  <p className="titlePart"><b>Undergraduate Scholarship Program</b></p>
                  </div>  
                  <div className="col-12">
                  {program_content}
                  </div>

                  <div className="col-6" style={{padding: "20px"}}>
                    <div className="row card">
                        <div className="col-12" style={{textAlign:'center'}}>
                            <img style={{width: '50%'}} src={require('../img/icon-freshmen.png')}></img>
                        </div>
                        <div className="col-12">
                            <p className="cardTitle">See Freshman Scholarship Program</p>
                            {freshman_program}
                        </div>
                    </div>
                  </div>
                  <div className="col-6" style={{padding: "20px"}}>
                    <div className="row card">
                        <div className="col-12" style={{textAlign:'center'}}>
                            <img style={{width: '50%'}} src={require('../img/icon-senior.png')}></img>  
                        </div>
                        <div className="col-12">
                            <p className="cardTitle">See Senior Scholarship Program</p>
                            {senior_program}
                        </div>
                    </div>
                  </div>

                </div>

                  <div className="col-12">
                  <PartnerUniversities></PartnerUniversities>
                  </div>

                  <div className="col-12" style={{padding: "0px"}}>
                    {timeline}
                  </div>
                  <div className="col-12">
                      <Testimony></Testimony>
                  </div>
                  
                  <div id="applyhere" className="col-12" style={{position:"relative", padding : "0px"}}>
                  <img style={{width:"100%"}} src={require('../img/BG-Apply.jpg')}></img>
                  <div className="content2">
                      <p className="WhiteBigText2">Applications are now closed.</p>
                      <p className="WhiteBigText2">We'll see you again next year</p>
                  </div>
                  </div>


                  <div className="col-12" id="faqsec">
                    {faq}
                  </div>
                
                  <div className="col-12" style={{position:"relative", padding : "0px"}}>
                  <img style={{width:"100%"}} src={require('../img/BG-Foot.jpg')}></img>
                  <div className="content3">
                      <p className="WhiteSmallText">For more information about Sea, check out our corporate website <u>here</u>.</p>
                      <p className="WhiteSmallText">If you have further queries, reach out to us at <u>id-scholarships@seagroup.com</u></p>
                  </div>
                  </div>

                {/* <Testimony></Testimony>
                <PartnerUniversities></PartnerUniversities> */}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    items : state.allWebContent.items, 
    loading : state.allWebContent.loading, 
    error : state.allWebContent.error
})

export default connect(mapStateToProps)(home)
