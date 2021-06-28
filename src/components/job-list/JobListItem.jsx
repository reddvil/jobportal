const JobListItem = ({
  title,
  description,
  image,
  company,
  location,
  skills,
}) => {
  return (
    <>
      <div className="job-item">
        <div className="company">
          <div className="company-logo">
            <img src={image} alt="img" />
          </div>
          <div className="vacansy-title">
            <h1>{title}</h1>
            <h2>{company}</h2>
          </div>
        </div>

        <div className="job-description">
          <div className="job-place">
            <i className="fas fa-map-marker-alt"></i>
            <h1>{location}</h1>
          </div>
          <div className="job-skills">
            <i className="fas fa-lightbulb"></i>
            <h2>{skills}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListItem;
