import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid container-fluid-footer">
        <div className="container-400">
          <ul className="footer-list d-flex">
            <li className="footer-item">
              <a className="footer-link">价格</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">联系我们</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">下载</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">合作伙伴</a>
            </li>
          </ul>
          <ul className="footer-list footer-list-bottom d-flex">
            <li className="footer-item-bottom">
              <a className="footer-link-bottom">© 2014–2018 共享器</a>
            </li>
            <li className="footer-item-bottom">
              <a className="footer-link-bottom">隐私政策</a>
            </li>
            <li className="footer-item-bottom">
              <a className="footer-link-bottom">手册</a>
            </li>
            <li className="footer-item-bottom">
              <a className="footer-link-bottom">服务条款</a>
            </li>
            <li className="footer-item-bottom">
              <a className="footer-link-bottom">卸载</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
