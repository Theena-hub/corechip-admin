import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./nav";

const AddBanner = () => {
    return (
        <>
            <Navigation />
            <div className="container-fluid mt-30 addProductSec">
                <div className="card bgWhite-F0F6F5 p-20 b-none dropShadow mx-20">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="titleThree fw-600 text-uppercase primaryColor">Add Banners</h1>
                        <Link className="width-fit-content" to='/viewbanners'><h1 className="width-fit-content titleFour fw-600 text-uppercase white bgPrimaryColor py-8 px-15 br-20">View Banners</h1></Link>
                    </div>
                    {/* {errorMessage&&<div className="white text-center bg-danger">
                                {errorMessage}
                            </div>} */}
                    <form className="form-group">
                        <div className="row row-gap">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="py-1">
                                    <label htmlFor=''>Title</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Title' name="title" />
                                </div>
                                <div className="py-1">
                                    <label htmlFor=''>Button Name</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Button Value' name="btnName" />
                                </div>
                                <div className="py-1">
                                    <label htmlFor='bannerImage'>Banner Image</label>
                                    <input
                                        id='bannerImage'
                                        className="form-control mt-8"
                                        type='file'
                                    />
                                    {/* {imagePreview && (
                                        <div className="image-preview mt-3">
                                            <img style={{ width: '100px', height: '100px' }} src={imagePreview} alt="Image Preview" className="img-preview" />
                                        </div>
                                    )} */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="py-1">
                                    <label htmlFor=''>Description</label>
                                    <textarea className="form-control mt-8" placeholder="Enter Description" rows={3} name="bannerDesc"></textarea>
                                </div>
                                <div className="py-1">
                                    <label htmlFor=''>URL for Button</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter URL for Button' name="btnUrl" />
                                </div>


                            </div>
                            <input type='button' className="btn bgPrimaryColor m-auto text-uppercase fw-600 width-fit-content px-25 py-10" value='Submit' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default AddBanner;