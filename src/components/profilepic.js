import React from 'react';

const ProfilePhoto = () => {
  return (
    <div className="profile-photo">
      <img src="assets/img/photo1.jpg" alt="" className="avatar-photo" />
      <div className="modal fade" id="modal" tabIndex={-1} role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body pd-5">
              <div className="img-container">
                <img id="image" src="assets/img/photo1.jpg" alt="Picture" />
              </div>
            </div>
            <div className="modal-footer">
              <input type="submit" defaultValue="Update" className="btn btn-primary" />
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
