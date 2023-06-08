import '../vendors/styles/core.css';
import '../vendors/styles/icon-font.min.css';
import '../vendors/styles/style.css';
const Widget = ({ count, label, icon }) => (

  <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
    <div className="card-box height-200-p widget-style3">
      <div className="d-flex flex-wrap">
        <div className="widget-data">
          <div className="weight-700 font-24 text-dark">{count}</div>
          <div className="font-14 text-secondary weight-500">{label}</div>
        </div>
        <div className="widget-icon">
          <div className="icon" data-color="">
            <i className={`icon-copy ${icon}`} />
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Widget;