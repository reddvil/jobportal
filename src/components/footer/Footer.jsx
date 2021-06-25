import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="inner-footer">
          <div className="copyright">
            <h1>ყველა უფლება დაცულია. JOBPORTAL -ის მიერ</h1>
          </div>
          <div className="footer_author">
            <h1>
              Made With
              <i
                className="fas fa-heart"
                style={{ fontSize: '12px', color: 'blue' }}></i>
            </h1>
          </div>
          <div className="footer_author">
            <h1>შექმნილია ZURAWEB - ში.</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
