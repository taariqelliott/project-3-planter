function Home(props) {
  return (
    <div className="homeParent">
      <div className="videoWrapper">
        <iframe
          src="https://www.youtube.com/embed/CV2P-xsEiYE?autoplay=1&mute=1&loop=1&playlist=CV2P-xsEiYE"
          frameborder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className="homeChild">
        <h1>plant(ER)</h1>
        <h5 className="homedesc">The Virtual Emergency Room For Plants</h5>
        <a href="/plants">
          <button className="homebutton">
            <h4>Get Started</h4>
          </button>
        </a>
      </div>
    </div>
  );
}


export default Home;
