import JobList from '../../components/job-list/JobList';
import Locations from '../../components/locations';
import Categories from '../../components/categories';

const HomePage = () => {
  return (
    <div className="content">
      <div className="container">
        <h1 className="main_title">Find a Slave</h1>

        <div className="search_section">
          <input type="search" placeholder="იპოვეთ თქვენი საოცნებო სამუშაო." />
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
          <input type="search" placeholder="იპოვეთ თქვენი საოცნებო სამუშაო." />
          <i className="fas fa-search"></i>
          <button className="job_search">ძებნა (0)</button>
        </div>

        <div className="cat-gap">
          <h1 className="main_title">Categories</h1>
          <button className="showcat">Show Cat</button>
        </div>

        <Categories />

        <h1 className="main_title" style={{ fontSize: '17px' }}>
          Location
        </h1>

        <Locations />

        <h1 className="main_title" style={{ fontSize: 15 }}>
          Jobs
        </h1>

        <JobList />

      </div>
    </div>
  );
};

export default HomePage;
