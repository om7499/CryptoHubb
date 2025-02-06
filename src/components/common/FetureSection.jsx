import React from 'react'

const FetureSection = () => {
  return (
    <div className='container p-4 border-bottom border-2'>
      <div className='text-center my-3'>
        <h1 className='fw-semi-bold text-info'>Our Awesome Features</h1>
        <p className='text-white'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore .</p>
      </div>
      <div className="m-5">
        <div className="row g-3"> {/* Use g-3 for consistent gaps */}
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card p-3 ">
                <h1>
                <i className="bi bi-file-earmark-lock2-fill icon-large"></i>
                </h1>
                <h3 className='text-primary'>Secure Wallet</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card p-3 ">
                <h1>
                <i className="bi bi-bell-fill icon-large"></i>
                </h1>
                <h3 className='text-primary'>Fast Notifications</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card p-3">
                <h1>
                <i className="bi bi-arrow-repeat icon-large"></i>
                </h1>
                <h3 className='text-primary'>Exchange Service</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card p-3">
                <h1>
                <i className="bi bi-gear icon-large"></i>
                </h1>
                <h3 className='text-primary'>Complete Solution</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card p-3">
                <h1>
                <i className="bi bi-airplane-fill icon-large"></i>
                </h1>
                <h3 className='text-primary'>Trading Platform</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card p-3">
                <h1>
                <i className="bi bi-currency-dollar icon-large"></i>
                </h1>
                <h3 className='text-primary'>Investment</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default FetureSection
