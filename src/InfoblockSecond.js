import React from "react";

const InfoblockSecond = () => {
  return (
    <>
       <div className="container-fluid infoblockSecond">
        <div className="container-lg-custom">
          <p className="infoblock-title infoblockSecond-title">
            Method 1: Simplest way to get help with Android phone reset
          </p>

          <div className="card-wrapper card-wrapper-second">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-7">
                  <div className="card-body">
                    
                    <h5 className="card-title card-title-second">ProductName #1</h5>
                    <p className="card-text-info card-text-info-second">
                    Share USB over Ethernet for Windows
                    </p>
                    <p className="card-text-info  card-text-info_opacity-second">
                    ProductName is a software that helps you access USB devices as if they were directly connected to your machine. The way it works is pretty similar to ProductName.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 infoblock-img">
                  <img
                    src="img/img/tempateTwoImage.png"
                    className="img-fluid rounded-start "
                    alt="img"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-outline-success btn-outline-success-second" type="button">
                Get it now
              </button>
          <div className="rating-wrapper d-flex">
            <div className="rating-area rating-area-second d-flex">
              <input type="radio" id="star-5" name="rating" value="5"></input>
              <label htmlFor="star-5" title="Оценка «5»"></label>
              <input type="radio" id="star-4" name="rating" value="4"></input>
              <label htmlFor="star-4" title="Оценка «4»"></label>
              <input type="radio" id="star-3" name="rating" value="3"></input>
              <label htmlFor="star-3" title="Оценка «3»"></label>
              <input type="radio" id="star-2" name="rating" value="2"></input>
              <label htmlFor="star-2" title="Оценка «2»"></label>
              <input type="radio" id="star-1" name="rating" value="1"></input>
              <label htmlFor="star-1" title="Оценка «1»"></label>
              <div>4.5 rank based on 988 users</div>
            </div>
          </div>
          <div className="requirements requirements-second">Windows XP and later, OS X 10.9+, Ubuntu 14.04+,<br/> Android 4.0 and above.</div>
        </div>
      </div>
    </>
  );
};

export default InfoblockSecond;
