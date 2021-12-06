import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid" id="header__container__fluid">
          <div className="logo__wrapper">
            <a href="#">
              <picture className="logo header__logo">
                <source
                  media="(min-device-pixel-ratio: 2), (min-resolution: 4dppx)"
                  srcSet="img/img/logoSmall@2x.png"
                ></source>
                <img src="img/img/logoSmall.png" alt="logo"></img>
              </picture>
            </a>
          
          <a className="navbar-brand" href="#">
            共享器
          </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Articles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Manual
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacts
                </a>
              </li>
            </ul>
            <div className="navbar-info">
              <div className="navbar-info-title">
                Start your free trial today
              </div>
              <div className="navbar-info-list">
                7-day Trial • Easy to use • Cancel anytime
              </div>
            </div>
            <form className="d-flex">
              <input
                className="input form-control"
                type="search"
                placeholder="输入邮箱"
                aria-label="Search"
                id="header__input"
              ></input>
              <button
                className="btn button header__button btn-outline-success"
                id="header__button"
                type="button"
              >
                开始使用
              </button>
            </form>
          </div>
        </div>
        <div className="burger" type="button" id="burger">
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </div>
      </nav>
    </>
  );
};

export default Header;
