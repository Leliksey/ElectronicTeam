import React from "react";

const InfoSectionSecond = () => {
  return (
    <>
      <div className="container-fluid container-fluid-comments">
        <div className="container-lg-custom">
          <div className="comLog">
            <div className="commentCount">0 Comments</div>
            <div className="log-wrapper">
              <div className="log-message">1</div>
              <div>
                <a href="#" className="log">
                  Login
                </a>
              </div>
              <div className="log-arrow">
                <a href="#">
                  <img className="" src="img/img/arrow.png"></img>
                </a>
              </div>
            </div>
          </div>

          <div className="comLog">
            <div className="comLog-left d-flex">
              <div className="log-wrapper">
                <div className="log-img">
                  <a href="#">
                    <img className="" style={{
                        backgroundImage: `url(img/img/sprite_small.png)`,
                        backgroundPosition: `-0px -20px`,
                        width: `21px`,
                        height: `20px`,
                        borderRadius: `50%`
                      }}></img>
                  </a>
                </div>
                <div>
                  <a href="#" className="log">
                    Recommended
                  </a>
                </div>
              </div>
              <div className="log-wrapper">
                <div className="log-img">
                  <a href="#">
                  <img className="" style={{
                        backgroundImage: `url(img/img/sprite_small.png)`,
                        backgroundPosition: `-1240px -73px`,
                        width: `21px`,
                        height: `20px`,
                        borderRadius: `50%`
                      }}></img>
                  </a>
                </div>
                <div>
                  <a href="#" className="log">
                    Share
                  </a>
                </div>
              </div>
            </div>
            <div className="comLog-right">
              <div className="log-wrapper">
                <div>
                  <a href="#" className="log">
                    Sort by Newest
                  </a>
                </div>
                <div className="log-arrow">
                  <a href="#">
                    <img className="" src="img/img/arrow.png"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="input-wrapper d-flex">
            <div className="log-avatar">
              <a href="#">
                <img className="" src="img/img/avatar.png"></img>
              </a>
            </div>
            <input
              className=" input-discussion"
              placeholder="Start the discussion..."
            ></input>
          </div>

          <div className="d-flex">
            <div className="social-wrapper">
              <div className="social-text">log in with</div>
              <div className="social-icon-wrapper d-flex">
                <div className="icon">
                  <a href="#">
                    <img className="" src="img/img/disqus-big.png"></img>
                  </a>
                </div>
                <div className="icon">
                  <a href="#">
                    <img className="" src="img/img/facebook.png"></img>
                  </a>
                </div>
                <div className="icon">
                  <a href="#">
                    <img className="" src="img/img/twitter.png"></img>
                  </a>
                </div>
                <div className="icon">
                  <a href="#">
                    <img className="" src="img/img/google-plus.png"></img>
                  </a>
                </div>
              </div>
            </div>

            <div className="signUp-wrapper">
              <div className="signUp-text-wrapper d-flex">
                <div className="social-text">or sign with disqus</div>
                <div className="signUp-text-img">
                  <a href="#">
                    <img
                      className="icon-question"
                      style={{
                        backgroundImage: `url(img/img/sprite_small.png)`,
                        backgroundPosition: `-1240px 0px`,
                        width: `21px`,
                        height: `24px`,
                        borderRadius: `50%`
                      }}
                    ></img>
                  </a>
                </div>
              </div>
              <input className=" input-signUp" placeholder="Name"></input>
            </div>
          </div>

          <div className="comment-text">Be the first to comment.</div>

          <div className="comLog">
            <div className="comLog-left d-flex">
              <div className="log-wrapper">
                <div className="log-img">
                  <a href="#">
                  <img className="" style={{
                        backgroundImage: `url(img/img/sprite_small.png)`,
                        backgroundPosition: `-620px 0`,
                        width: `21px`,
                        height: `20px`,
                        borderRadius: `89% 93%`
                      }}></img>
                  </a>
                </div>
                <div>
                  <a href="#" className="log">
                    Subscribe
                  </a>
                </div>
              </div>
              <div className="log-wrapper">
                <div className="log-img">
                  <a href="#">
                  <img className="" style={{
                        backgroundImage: `url(img/img/sprite_small.png)`,
                        backgroundPosition: `0 0`,
                        width: `21px`,
                        height: `20px`,
                        borderRadius: `50%`
                      }}></img>
                  </a>
                </div>
                <div>
                  <a href="#" className="log">
                    Add Disqus to your site
                  </a>
                </div>
              </div>
              <div className="log-wrapper">
                <div className="log-img">
                  <a href="#">
                  <img className="" style={{
                        backgroundImage: `url(img/img/sprite_sm.png)`,
                        backgroundPosition: `-617px -60px`,
                        width: `24px`,
                        height: `22px`,
                        borderRadius: `50%`
                      }}></img>
                  </a>
                </div>
                <div>
                  <a href="#" className="log">
                    Discus' Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            <div className="comLog-right">
              <div className="log-wrapper">
                <div>
                  <a href="#" className="log-bold">
                    DISQUS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSectionSecond;
