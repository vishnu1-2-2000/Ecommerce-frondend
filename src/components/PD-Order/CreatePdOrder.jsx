import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";

const CreatePdOrder = () => {
  return (
    <div className="wrapper">
      {/* Sidebar */}
      <SideBar />

      {/* Main Panel */}
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="page-inner">
            <div className="page-header">
              <h3 className="fw-bold mb-3">PD/Concept</h3>
              <ul className="breadcrumbs mb-3">
                <li className="separator">
                  <i className="icon-arrow-right"></i>
                </li>
                <li className="nav-item">
                  <a>PD/Concept</a>
                </li>
                <li className="separator">
                  <i className="icon-arrow-right"></i>
                </li>
                <li className="nav-item">
                  <a href="#">Create Order</a>
                </li>
              </ul>
            </div>

            {/* Order Form */}
            <div className="row">
              {/* Customer Selection */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="customerSelect">Customer</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              {/* Email Input */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="emailInput">Email</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="emailInput"
                    placeholder="Enter email"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              {/* Mobile Input */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="mobileInput">Mobile</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="mobileInput"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>

              {/* Customer Code Input */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="customerCodeInput">Customer Code</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="customerCodeInput"
                    placeholder="Enter customer code"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              {/* Date Input */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="dateInput">Date</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="dateInput"
                    placeholder="Enter date"
                  />
                </div>
              </div>

              {/* Promised Date Input */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="promisedDateInput">Promised Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="promisedDateInput"
                    placeholder="Enter promised date"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              {/* Date Input */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="dateInput">Required Count</label>
                  <input
                    type="text"
                    className="form-control"
                    id="dateInput"
                    placeholder="Enter date"
                  />
                </div>
              </div>

              {/* Promised Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Product Type</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Category Group</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              {/* Promised Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Gender</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>


            <div className="row">
              {/* Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Category</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              {/* Promised Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Sub Category</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Style</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              {/* Promised Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Brand</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Metal Type</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              {/* Promised Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Occasion</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Expected Gross Weight</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              {/* Promised Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Metal Color</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Diamond Range</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              {/* Promised Date Input */}
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="customerSelect">Expected Net Weight</label>
                  <select className="form-select pd-select" id="customerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="form-group col-md-6">
              <label htmlFor="imageUpload">Choose Image File</label>
              <input
                type="file"
                className="form-control-file"
                id="imageUpload"
              />
            </div>

            {/* Comment Section */}
            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea className="form-control" id="comment" rows="5"></textarea>
            </div>

            {/* Action Buttons */}
            <div className="card-action">
              <button className="btn btn-success">Submit</button>
              <button className="btn btn-danger">Cancel</button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default CreatePdOrder;
