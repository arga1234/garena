import React from 'react'
import '../App.scss';
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { fetchTestimony } from "../actions/testimonyActions";

class testimony extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchTestimony());
    }
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        const { error, loading, testimony } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
      
        if (loading) {
        return <div>Loading...</div>;
        }
      
        return (
        <div className="row container">
            <div className="col-12">
                <p className="titlePart">Testimonial</p>
            </div>
            <div className="col-12">
                <Slider {...settings}>
                    {testimony.map((x, index)=>{
                        return(<div key={index} className="row">
                        <div className="col-4">
                            <img className="imageTestimony" src={x.image}></img>
                        </div>
                        <div className="col-8">
                        <p>{x.story}</p>
                        <p className="testimonyName">{x.name}</p>
                        </div>
                    </div>)
                    })}
                </Slider>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    testimony: state.testimony.items,
    loading: state.testimony.loading,
    error: state.testimony.error
});

export default connect(mapStateToProps)(testimony);
