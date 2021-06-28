function JobListItem() {
  return (
    <>
      <div className="job-item">
        <div className="company">
          <div className="company-logo">
            <img src="img/job icon.png" alt="img" />
          </div>
          <div className="vacansy-title">
            <h1>Creative Director</h1>
            <h2>Apple</h2>
          </div>
        </div>

        <div className="job-description">
          <div className="job-place">
            <i className="fas fa-map-marker-alt"></i>
            <h1>Georgia</h1>
          </div>
          <div className="job-skills">
            <i className="fas fa-lightbulb"></i>
            <h2>Adobe XD, Photoshop , Illustrator</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobListItem;
