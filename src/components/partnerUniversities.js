import React from 'react'
import '../App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from 'react-redux';
import { fetchPartnerUniv } from '../actions/partnerUniversitiesActions'
 class partnerUniversities extends React.Component {
   async componentDidMount(){
       await this.props.dispatch(fetchPartnerUniv());
    }
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        const {university, faculty, loading, error}  = this.props ;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
      
        if (loading) {
        return <div>Loading...</div>;
        }

        return (
        <div className="row container">
            <div className="col-12">
            <p className="titlePart">Partner Universities</p>
            </div>
            <div className="col-12">
            <Slider {...settings}>
            {university.map((x, index)=>{
                return(
                    <div key={index} className="row">
                        <div className="col-4">
                            <img style={{width:"100%"}} src={x.univ_logo}></img>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-12">
                                 <p className="universityName">{x.univ_name}</p>
                                </div>
                                <div className="col-12">
                                    <ul className="facultyList">
                                    {faculty.map((y, index2)=>{
                                    if(y.univ_id == x.id){
                                    return <li className="facultyListItem" key={index2}>{y.name}</li>
                                    }
                                    })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </Slider>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    university : state.partnerUniversities.university,
    faculty : state.partnerUniversities.faculty,
    loading: state.partnerUniversities.loading,
    error: state.partnerUniversities.error
});

export default connect(mapStateToProps)(partnerUniversities) 
