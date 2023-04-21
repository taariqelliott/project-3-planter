function Home(props) {
  return (
    <div className="homeParent1">
      <div className="videoWrapper">
        <video className="back-video" id="background-video" autoPlay loop muted video="https://planter123.s3.us-east-2.amazonaws.com/flowers1.mp4">
        <source src="https://planter123.s3.us-east-2.amazonaws.com/flowers1.mp4" type="video/mp4"/>
        </video>
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
