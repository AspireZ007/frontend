import '../vendors/styles/core.css';
import '../vendors/styles/icon-font.min.css';
import '../vendors/styles/style.css';

const CourseTableRow = ({ name, duration, uploadDate, enrollments, rating }) => (
    <tr>
      <td className="table-plus">
        <div className="name-avatar d-flex align-items-center">
          <div className="txt">
            <div className="weight-600">{name}</div>
          </div>
        </div>
      </td>
      <td>{duration}</td>
      <td>{uploadDate}</td>
      <td>{enrollments}</td>
      <td>{rating}</td>
      <td>
        <div className="table-actions">
         
          <a href="#" data-toggle="tooltip" title="Edit">
            <i className="dw dw-edit2" />
          </a>
          <a href="#" data-toggle="tooltip" title="Delete">
            <i className="dw dw-delete-3" />
          </a>
        </div>
      </td>
    </tr>
  );
  
  export default CourseTableRow;
