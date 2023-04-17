const Footer = (props) => {
  return (
    <div className="footer-section">
      <div className="flex-div">
        <div className="footer-content">
          <h3>About us</h3>
          <p>
            This website is not for commercial use but a demo of it. Pictures
            and details are taken from internet to create a school project. As a
            plant lover, we four decided to create a demo of plant app, so that
            other plant lovers around the plant community get benefited. By
            using this app you will be able to write and post your articles
            about plants. Also we provide the plant diagonis option for you to
            find out the plant diseases and plant treatment.
          </p>
        </div>
        <div>
          <div className="footer-link">
            <a href="/#">Contact us</a>
            <a href="/help">Diagnose Your Plant</a>
          </div>
          <div className="top-margin">
            <p className="footer-text">
              Copyright &copy; Taariq, Alina, Sam, Rezwana <span id="year">{new Date().getFullYear()}</span>
            </p>
            <p className="footer-text">
              For any inquiry <strong>email:</strong>{" "}
              <div className="footer-link">
                <a href="mailto:alina.polianska@yahoo.com">Alina</a>
                <a href="mailto:transferdata76@gmail.com">Khiem Le</a>
                <a href="mailto:taariq.elliott@yahoo.com">Taariq Elliott</a>
                <a href="mailto:rezwanatech@gmail.com">Rezwana Sultana</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
