function MainSearch() {
  return (
    <>
      <div className="search_section">
        <input type="search" placeholder="იპოვეთ თქვენი საოცნებო სამუშაო." />
        <i className="fas fa-search"></i>
        <label style={{ paddingLeft: 10 }} htmlFor="Category">
          Seniority:
        </label>
        <select id="search-location">
          <option className="opt" value="all">
            All
          </option>
          <option className="opt" value="1">
            Intern
          </option>
          <option className="opt" value="2">
            Junior
          </option>
          <option className="opt" value="3">
            Middle
          </option>
          <option className="opt" value="3">
            Senior
          </option>
          <option className="opt" value="3">
            Team Lead
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
    </>
  );
}

export default MainSearch;
