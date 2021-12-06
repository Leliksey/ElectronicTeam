import React from "react";

const Main = () => {
  return (
    <>
      <main className="container-fluid bg-light">
        <div className="container-lg">
          <div className="card bg-dark text-white">
            <img
              src="img/img/coverHeadBgrnd.jpg"
              className="card-img"
              alt="pic"
            ></img>
            <div className="card-img-overlay">
              <h5 className="card-title">
                How to reset Android phone remotely
              </h5>
              <div className="card-text-wrap d-flex ">
                <div className="logo__wrapper">
                  <picture className="card-img">
                    <source
                      media="(min-device-pixel-ratio: 2), (min-resolution: 4dppx)"
                      srcSet="img/img/avatarImage@2x.png"
                    ></source>
                    <img src="img/img/avatarImage.png" alt="avatar"></img>
                  </picture>
                </div>
                <p className="card-text">Olga Weis • 16 May, 2018</p>
              </div>
            </div>
          </div>
          <div className="container-md">
            <p className="main-text">How to reset Android phone remotely</p>
            <p className="main-description">
              Factory Reset Protection is a part of Device Protection, a feature
              added by Google in March 2015 for Android devices with 5.1 and
              later versions. If your phone has this feature enabled – most
              probably it does – you can factory reset an Android phone only
              under the login credentials you used when the device was new.
            </p>
            <p className="main-description">
              This functionality is basically meant to keep thieves off your
              phone – even if someone gets hold of it, they won’t be able to
              wipe it clean and sell it off without knowing your login
              credentials.
            </p>
            <p className="main-description_small">
              However, as it is always the case with security features, Factory
              Reset Protection can become either your best friend or your
              greatest enemy.
            </p>

            <p className="main-description">
              Considering the number of accounts, passwords and PINs we use
              every day, it is highly possible that one day you might just
              forget what Google account you used when setting up your phone.
            </p>
            <p className="main-description">
              Or, say, you bought a used phone and the previous user did not
              remove google account from Android. What do you do then? How to
              remove a google account from Android? Is there a way to bypass
              Google account verification?
            </p>

            <p className="main-text">How to bypass FRP?</p>
            <p className="main-description main-description-pb">
              Not everyone is ready to spend precious time waiting for the
              technician to come over and unlock the phone.{" "}
              <span className="main-accentuation">The modern market deals</span>{" "}
              with that problem offering a number of services that will remove
              FRP from your Android device remotely.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
