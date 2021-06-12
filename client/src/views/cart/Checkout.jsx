import React, { Component } from "react";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconReceipt } from "bootstrap-icons/icons/receipt.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import axios from 'axios';
class CheckoutView extends Component {
  constructor(props) {
    super();
    this.state = {};
    // this.razorPayHandler = this.razorPayHandler(this);
  }

  async razorPayHandler() {
    const orderUrl = "http://localhost:3001/razorpay/order"
    const response = await axios.get(orderUrl);
    const { data } = response;
    const options = {
      key: 'rzp_test_ogACXm0sRFn9Qv',
      name: 'harshal',
      desciption: 'here we need description for payment.',
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `http:localhost:3001/razorpay/capture/${paymentId}`
          const captureResponse = await axios.post(url, {});
          const successObj = JSON.parse(captureResponse.data);
          if (successObj.captured) {
            console.log('Payment Success!!');
          }
        } catch (error) {
          console.error(error.message);
        }
      },
      theme: {
        color: '#686CFD'
      }
    }
    const rzp1 = new window.Razorpay(options);
    rzp1.open()
  }

  render() {
    return (
      <React.Fragment>
        <div className="bg-secondary border-top p-4 text-white mb-3">
          <h1 className="display-6">Checkout</h1>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-header">
                  <IconEnvelope className="i-va" /> Contact Info
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile no"
                        aria-label="Mobile no"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <IconTruck className="i-va" /> Shipping Infomation
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Addresss"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address 2 (Optional)"
                      />
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" required>
                        <option value>-- Country --</option>
                        <option>United States</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" required>
                        <option value>-- State --</option>
                        <option>California</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <IconReceipt className="i-va" /> Billing Infomation
                  <div className="form-check form-check-inline ml-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Same as Shipping Infomation
                    </label>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Addresss"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address 2 (Optional)"
                      />
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" required>
                        <option value>-- Country --</option>
                        <option>United States</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" required>
                        <option value>-- State --</option>
                        <option>California</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 border-info">
                <div className="card-header bg-info">
                  <IconCreditCard2Front className="i-va" /> Payment Method
                </div>
                <div className="card-footer border-info">
                  <button onClick={this.razorPayHandler} type="button" className="btn btn-block btn-info">
                    Pay Now <strong>$162</strong>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <IconCart3 className="i-va" /> Cart{" "}
                  <span className="badge bg-secondary float-right">3</span>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Product name</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$150</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Second product</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$12</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Third item</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$50</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">−$50</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$162</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckoutView;
