import React from "react";

const Infoblock = () => {
  return (
    <>
      <div className="container-fluid infoblock">
        <div className="container-lg-custom">
          <p className="infoblock-title">
            Method 1: Simplest way to get help with Android phone reset
          </p>

          <div className="card-wrapper">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-7">
                  <div className="card-body">
                    <div className="logo__wrapper">
                      <picture className="logo infoblock-logo">
                        <source
                          media="(min-device-pixel-ratio: 2), (min-resolution: 4dppx)"
                          srcSet="img/img/logoLarge@2x.png"
                        ></source>
                        <img src="img/img/logoLarge.png" alt="logo"></img>
                      </picture>
                    </div>
                    <h5 className="infoblock-card-title">ProductName #1</h5>
                    <p className="card-text-info">
                      Share USB over IP network and access remote USB and serial
                      devices from anywhere!
                    </p>
                    <p className="card-text-info card-text-info_opacity">
                      The easiest way will be to use ProductName, an app that
                      lets you access and share remote USB devices over IP.
                      Figure out how to share scanner between two computers with
                      ProductName help.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 infoblock-img">
                  <img
                    src="img/img/tempateOneImage.png"
                    className="img-fluid rounded-start "
                    alt="img"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div className="form-wrapper d-flex bg-light">
            <div className="navbar-info navbar-info_left">
              <div className="navbar-info-title navbar-info-title_big">
                Start your free trial today
              </div>
              <div className="navbar-info-list navbar-info-list_big">
                7-day Trial • Cancel anytime
              </div>
            </div>
            <form className="d-flex">
              <input
                className="input form-control form-control_big"
                type="email"
                placeholder="Your email address"
                aria-label="Search"
              ></input>
              <button className="btn button btn-outline-success" type="submit">
                Get started
              </button>
            </form>
          </div>
          <div className="rating-wrapper d-flex">
            <div className="rating-area d-flex">
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
            <div className="sign-wrapper d-flex">
              <div className="sign-text">Already a ProductName user?</div>
              <a href="#" className="sign-log">
                Sign In →
              </a>
            </div>
          </div>
          <div className="requirements">
            Windows XP and later, OS X 10.9+, Ubuntu 14.04+,
            <br /> Android 4.0 and above.
          </div>
        </div>
      </div>
    </>
  );
};

export default Infoblock;
