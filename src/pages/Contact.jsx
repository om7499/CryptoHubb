import React, { useState } from "react";
import ContactUsSection from "../components/common/ContactUsSection";

const Contact = () => {
  

  return (
    <>
     <div className="container-fluid">

         {/* hero section  */}
        <div className=" container border-bottom border-2">
        <ContactUsSection/>
        </div>

        {/* contact info section */}
        <div className="container my-5 ">
          <div className="row g-3 mx-auto">
             <div className="col-md-4 col-lg-4 col-sm-12 text-white shadow-lg mx-auto">
                 <div className="p-2">
                  <h2 className="text-info"> <span className="text-primary "><i className="bi bi-telephone-fill fs-2"></i> </span>Phone Number</h2>
                 </div>
                 <div className="p-4">
                  <h5>+(555) 123-4567</h5>
                  <h5> +(555) 987-6543</h5>
                 </div>
             </div>
             <div className="col-md-4 col-lg-4 col-sm-12 text-white shadow-lg mx-auto ">
                 <div className="p-2">
                  <h2 className="text-info"> <span className="text-primary "><i className="bi bi-envelope-arrow-down-fill fs-2"></i> </span>
                  Mail Address</h2>
                 </div>
                 <div className="p-4">
                  <h5>coindox@gmai.com</h5>
                  <h5> info@gmail.com</h5>
                 </div>
             </div>
             <div className="col-md-4 col-lg-4 col-sm-12 text-white shadow-lg mx-auto">
                 <div className="p-2">
                  <h2 className="text-info"> <span className="text-danger "><i className="bi bi-geo-alt-fill fs-2"></i> </span>Our Location</h2>
                 </div>
                 <div className="p-4">
                  <h5>123 Main Street</h5>
                  <h5> Anytown, CA 98765</h5>
                 </div>
             </div>
          </div>
        </div>
      </div>     
    </>
  )
}

export default Contact
