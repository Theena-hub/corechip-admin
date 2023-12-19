import React from "react";
import Navigation from "./nav";
const Index = () => {
        return (
            <>
                {/* navbar - start */}
                <Navigation />
                {/* navbar - end */}
                {/* start */}
                <div className="container-fluid mt-4">
                    <h2 className="titleThree fw-500 primaryColor text-uppercase">Recent Registers</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Mobile</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>Company</td>
                                    <td>9090900000</td>
                                    <td>john@example.com</td>
                                    <td>john@examplesskskk</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>Company</td>
                                    <td>9090900000</td>
                                    <td>john@example.com</td>
                                    <td>john@examplesskskk</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>Company</td>
                                    <td>9090900000</td>
                                    <td>john@example.com</td>
                                    <td>john@examplesskskk</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>Company</td>
                                    <td>9090900000</td>
                                    <td>john@example.com</td>
                                    <td>john@examplesskskk</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* end */}
            </>
        ) 
}
export default Index;