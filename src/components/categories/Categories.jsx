import cat1 from '../../ui/images/1.png';
import cat2 from '../../ui/images/2.png';
import cat3 from '../../ui/images/3.png';
import cat4 from '../../ui/images/4.png';
import cat5 from '../../ui/images/5.png';
import cat6 from '../../ui/images/6.png';

function Categories() {
  return (
    <div>
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
    </div>
  );
}

export default Categories;
