import React, { useState } from "react";
import Navigation from "./nav";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { addProduct } from "../services/api";

const EditProducts = () => {
    const history = useNavigate();
    const location = useLocation()
    const fromDashboard = location.state
    const [errorMessage, setErrorMessage] = useState('');
    console.log(fromDashboard)
    const [state, setState] = useState(fromDashboard);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setState((prevState) => ({
                ...prevState,
                productImage: file,
                imagePreview: URL.createObjectURL(file),
            }));
        }
    };
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }

    const handlesubmit=async(e)=>{
        console.log(state)
        const result=await addProduct(state)
        console.log(result)
        if(result.status=='success'){
            setErrorMessage(result.data)
            history('/viewproducts')
        }else{
            setErrorMessage(result.data)
            console.log(result.data)
        }
    }


    const { productName, productImage,imagePreview, productSize, productPrice, productColor, productDiscount } = state;

    return (
        <>
            {/* navbar - start */}
            <Navigation />
            {/* navbar - end */}
            {/* edit product section - start */}
            <div className="container-fluid mt-30 editProductSec">
                <div className="card bgWhite-F0F6F5 p-20 b-none dropShadow mx-20">
                    <div className="d-flex justify-content-between align-items-center">
                    {errorMessage&&<div className="white text-center bg-danger">
                                {errorMessage}
                            </div>}
                        <h1 className="titleThree fw-600 text-uppercase primaryColor">Edit Product</h1>
                        <Link className="width-fit-content" to='/viewproducts'><h1 className="width-fit-content titleFour fw-600 text-uppercase white bgPrimaryColor py-8 px-15 br-20">View Products</h1></Link>
                    </div>
                    <form className="form-group">
                        <div className="row row-gap">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="py-1">
                                    <label htmlFor=''>Product Name</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Product Name' defaultValue={state.productName} name="productName"  onChange={handleChange}/>
                                </div>
                                <div className="py-1">
                                    <label htmlFor=''>Product Size</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Product Size' defaultValue={state.size} name="size" onChange={handleChange}/>
                                </div>
                                <div className="py-1">
                                    <label htmlFor=''>Product Color</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Product Color' defaultValue={state.color}  name="color" onChange={handleChange}/>
                                </div>
                                <div className="py-1">
                                    <label htmlFor=''>Product Discount</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Product Discount' defaultValue={state.discountPrice} name="discountPrice" onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="py-1">
                                    <label htmlFor=''>Product Description</label>
                                    <textarea className="form-control mt-8" placeholder="Enter Product Description" rows={3} defaultValue={state.description} name="description" onChange={handleChange}></textarea>
                                </div>
                                <div className="py-1">
                                    <label htmlFor=''>Product Price</label>
                                    <input className="form-control mt-8" type='text' placeholder='Enter Product Price' defaultValue={state.price} name="price" onChange={handleChange}/>
                                </div>
                                <div className="py-1">
                                    <label htmlFor='productImage'>Product Image</label>
                                    <input
                                        id='productImage'
                                        className="form-control mt-8"
                                        type='file'
                                        accept='image/*'
                                        onChange={handleImageChange}
                                    />
                                    {(imagePreview || fromDashboard.productImage) && (
                                        <div className="image-preview mt-3">
                                            <img style={{ width: '100px', height: '100px' }} src={imagePreview?imagePreview:fromDashboard.productImage} alt="Product Preview" className="img-preview" />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <input type='button' className="btn bgPrimaryColor m-auto text-uppercase fw-600 width-fit-content px-25 py-10" value='Submit' onClick={handlesubmit}/>
                        </div>
                    </form>
                </div>
            </div>
            {/* edit product section - end */}
        </>
    );
};
export default EditProducts;