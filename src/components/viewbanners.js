import React from "react";
import Navigation from "./nav";
import { Link } from "react-router-dom";
import image from "../assets/img/productSecOneImgOne.svg";

const ViewBanners = () => {
    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* view products - start */}
            <div className="container-fluid viewProductSec mt-30">
                <div className="d-flex justify-content-between">
                    <h1 className="mb-4 titleThree text-uppercase">View Banners</h1>
                    <Link className="width-fit-content" to='/addbanners'><h1 className="width-fit-content titleFour fw-600 text-uppercase white bgPrimaryColor py-8 px-15 br-20">Add Banners</h1></Link>
                </div>
                <div className="row mx-3 row-gap">
                    <div className="col-lg-6">
                        <div className="card b-none p-15 bgColor-F4FCFA dropShadow">
                            <img className="bannerImage m-auto" src={image} alt="bannerImage" />
                            <h1 className="d-flex justify-content-between text-uppercase fw-600 titleFour mt-3 primaryColor">Title</h1>                            
                            <p className="fw-400 descriptionTwo black">Description</p>
                            <div className="d-flex justify-content-between">
                                <p>Button Name</p>
                                <p>Button URL</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to="/editbanners" ><input className="btn btn-success b-none" type='button' value='Edit' /></Link>
                                <input className="btn btn-danger b-none" type='button' value='Delete' />
                            </div>
                        </div>
                    </div>                        
                </div>
                {/* </div> */}
            </div>
            {/* view products - end */}
        </>
    )
}
export default ViewBanners;