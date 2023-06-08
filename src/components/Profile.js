import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ProfilePhoto from './profilepic';
import ContactInformation from './ContactInfo';
import Skills from './Skills';
import '../vendors/styles/core.css';
import '../vendors/styles/icon-font.min.css';
import '../vendors/styles/style.css';

function Profile() {
  // Sample data for contact information and skills
  const contactInfoData = [
    { label: 'Email Address', value: 'FerdinandMChilds@test.com' },
    { label: 'Phone Number', value: '619-229-0054' },
    { label: 'Country', value: 'America' },
    { label: 'Address', value: '1807 Holden Street\nSan Diego, CA 92115' },
  ];

  const skillsData = [
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 70 },
    { name: 'jQuery', progress: 60 },
    { name: 'Bootstrap', progress: 80 },
  ];

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>

      <div className="main-container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
            
          <div className="pd-20 card-box height-100-p">
              <ProfilePhoto />
              <h5 className="text-center h5 mb-0">John Angelo</h5>
              <p className="text-center text-muted font-14">
                Software Developer
              </p>
              <ContactInformation contactInfo={contactInfoData} />
              <Skills skills={skillsData} />
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-30">
            <div className="card-box height-100-p overflow-hidden">
              <div className="profile-tab height-100-p">
                <div className="tab height-100-p">
                  <ul className="nav nav-tabs customtab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#setting"
                        role="tab"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                  <div
                    className="tab-pane fade show active height-100-p"
                    id="setting"
                    role="tabpanel"
                  >
                    <div className="profile-setting">
                      <form>
                        <ul className="profile-edit-list row">
                          <li className="weight-500 col-md-6">
                            <h4 className="text-blue h5 mb-20">
                              Edit Your Personal Setting
                            </h4>
                            <div className="form-group">
                              <label>Full Name</label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                              />
                            </div>
                            <div className="form-group">
                              <label>Title</label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                              />
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                className="form-control form-control-lg"
                                type="email"
                              />
                            </div>
                            <div className="form-group">
                              <label>Date of birth</label>
                              <input
                                className="form-control form-control-lg date-picker"
                                type="text"
                              />
                            </div>
                            <div className="form-group">
                              <label>Gender</label>
                              <div className="d-flex">
                                <div className="custom-control custom-radio mb-5 mr-20">
                                  <input
                                    type="radio"
                                    id="customRadio4"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label weight-400"
                                    htmlFor="customRadio4"
                                  >
                                    Male
                                  </label>
                                </div>
                                <div className="custom-control custom-radio mb-5">
                                  <input
                                    type="radio"
                                    id="customRadio5"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label weight-400"
                                    htmlFor="customRadio5"
                                  >
                                    Female
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Country</label>
                              <select
                                className="selectpicker form-control form-control-lg"
                                data-style="btn-outline-secondary btn-lg"
                                title="Not Chosen"
                              >
                                <option>United States</option>
                                <option>India</option>
                                <option>United Kingdom</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>Phone Number</label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                              />
                            </div>
                            <div className="form-group">
                              <label>Address</label>
                              <textarea
                                className="form-control"
                                defaultValue={""}
                              />
                            </div>
                            <div className="form-group">
                              <label>Paypal ID</label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                              />
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox mb-5">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck1-1"
                                />
                              </div>
                            </div>
                            <div className="form-group mb-0">
                              <input
                                type="submit"
                                className="btn btn-primary custom-color"
                                defaultValue="Update Information"
                              />
                            </div>
                          </li>
                          <li className="weight-500 col-md-6">
                            <h4 className="text-blue h5 mb-20">
                              Edit Skills list
                            </h4>
                            <div className="form-group">
                              <label>Skill 1:</label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Paste your link here"
                              />
                            </div>
                            <div className="form-group">
                              <label>Skill 2:</label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Paste your link here"
                              />
                            </div>
                            <div className="form-group">
                              <label>Skill 3:</label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Paste your link here"
                              />
                            </div>
                            <div className="form-group">
                              <label>Skill 4:</label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Paste your link here"
                              />
                            </div>
                            <div className="form-group">
                              <label>Skill 5:</label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Paste your link here"
                              />
                            </div>
                            <div className="form-group mb-0">
                              <input
                                type="submit"
                                className="btn btn-primary custom-color"
                                defaultValue="Save & Update"
                              />
                            </div>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

</>

    );
};


export default Profile;





