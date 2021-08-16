import JobList from '../../components/job-list/JobList';
import Locations from '../../components/locations';
import Categories from '../../components/categories';
import MainSearch from '../../components/mainSearch/MainSearch';
import MainTitle from '../../components/mainTitle/MainTitle';

const HomePage = () => {
  return (
    <div className="content">
      <div className="container">
        <MainTitle style={{ fontSize: '24px' }} title="Find a Slave" />

        <MainSearch />

        <div className="cat-gap">
          <MainTitle style={{ fontSize: '19px' }} title="Categories" />
          <button className="showcat">Show Cat</button>
        </div>

        <Categories />

        <MainTitle style={{ fontSize: '19px' }} title="Location" />

        <Locations />

        <MainTitle style={{ fontSize: '19px' }} title="Jobs" />

        <JobList />
      </div>
    </div>
  );
};

export default HomePage;
