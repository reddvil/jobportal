import cat1 from '../../ui/images/1.png';
import cat2 from '../../ui/images/2.png';
import cat3 from '../../ui/images/3.png';
import cat4 from '../../ui/images/4.png';
import cat5 from '../../ui/images/5.png';
import cat6 from '../../ui/images/6.png';

const HomePage = () => {
  return (
    <div>
      <div className="content">
        <div className="container">
          <h1 className="main_title">Find a Slave</h1>

          <div className="search_section">
            <input
              type="search"
              placeholder="იპოვეთ თქვენი საოცნებო სამუშაო."
            />
            <i className="fas fa-search"></i>
            <label htmlFor="Category">Category:</label>
            <select id="search-location">
              <option className="opt" value="all">
                All
              </option>
              <option className="opt" value="1">
                Tbilisi
              </option>
              <option className="opt" value="2">
                Shida Khartli
              </option>
              <option className="opt" value="3">
                Khashuri
              </option>
              <option className="opt" value="3">
                Qvemo Khartli
              </option>
              <option className="opt" value="3">
                Adjara
              </option>
            </select>
            <label htmlFor="location">Location:</label>
            <select id="search-location">
              <option className="opt" value="all">
                All
              </option>
              <option className="opt" value="1">
                Tbilisi
              </option>
              <option className="opt" value="2">
                Shida Khartli
              </option>
              <option className="opt" value="3">
                Khashuri
              </option>
              <option className="opt" value="3">
                Qvemo Khartli
              </option>
              <option className="opt" value="3">
                Adjara
              </option>
            </select>

            <button className="job_search">ძებნა (0)</button>
          </div>

          <div className="search_mobile">
            <input
              type="search"
              placeholder="იპოვეთ თქვენი საოცნებო სამუშაო."
            />
            <i className="fas fa-search"></i>
            <button className="job_search">ძებნა (0)</button>
          </div>

          <div className="cat-gap">
            <h1 className="main_title">Categories</h1>
            <button className="showcat">Show Cat</button>
          </div>

          <div className="categories">
            <div className="category">
              <div className="icon">
                <img src={cat1} alt="img" className="icon_img" />
              </div>
              <div className="title_gap">
                <h1 className="title">Design</h1>
                <div className="jobs_count">300+ jobs</div>
              </div>
            </div>

            <div className="category">
              <div className="icon">
                <img src={cat2} alt="img" className="icon_img" />
              </div>
              <div className="title_gap">
                <h1 className="title">Engineering</h1>
                <div className="jobs_count">300+ jobs</div>
              </div>
            </div>

            <div className="category">
              <div className="icon">
                <img src={cat3} alt="img" className="icon_img" />
              </div>
              <div className="title_gap">
                <h1 className="title">IT</h1>
                <div className="jobs_count">300+ jobs</div>
              </div>
            </div>

            <div className="category">
              <div className="icon">
                <img src={cat4} alt="img" className="icon_img" />
              </div>
              <div className="title_gap">
                <h1 className="title">Marketing</h1>
                <div className="jobs_count">300+ jobs</div>
              </div>
            </div>

            <div className="category">
              <div className="icon">
                <img src={cat5} alt="img" className="icon_img" />
              </div>
              <div className="title_gap">
                <h1 className="title">Teaching</h1>
                <div className="jobs_count">300+ jobs</div>
              </div>
            </div>

            <div className="category">
              <div className="icon">
                <img src={cat6} alt="img" className="icon_img" />
              </div>
              <div className="title_gap">
                <h1 className="title">Medical</h1>
                <div className="jobs_count">300+ jobs</div>
              </div>
            </div>
          </div>

          <h1 className="main_title" style={{ fontSize: '17px' }}>
            Location
          </h1>

          <div className="locations">
            <div className="location">Tbilisi</div>
            <div className="location">Kutaisi</div>
            <div className="location">Batumi</div>
            <div className="location">Rustavi</div>
            <div className="location">Shida Khartli</div>
            <div className="location">Khashuri</div>
            <div className="location">Qvemo Kartli</div>
            <div className="location">Mcxeta</div>
          </div>

          <h1 className="main_title" style={{ fontSize: 15 }}>
            Jobs
          </h1>

          <div className="jobs_list">
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
                  <h2>Adobe XD, Photoshop , Illustrato</h2>r
                </div>
              </div>
            </div>

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
          </div>

          <button className="show_more">მეტის ნახვა</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
