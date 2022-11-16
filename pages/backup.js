import Head from "next/head";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apnapaisa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img
          src="apnapaisa-navbar.png"
          alt="Apnapaisa Nav"
          style={{ width: "100vw" }}
        />
        {/* <nav className="navbar bg-light">
          <div className="container">
          </div>
        </nav> */}
        <div className="row mt-5 mx-3">
          <div className="col-12 col-lg-6 px-5">
            <div className="mt-1 pt-1 mt-lg--5 pt-lg-5 d-flex flex-column justify-content-center">
              <h1 className="display-4 fw-bold">
                Your Credit Score is just a click away.
              </h1>
              <p className="display-6 fs-5 mt-2">
                A good credit score can help you get the best rates on loans. It
                can also help you get a new credit card with great deals and
                offers.
              </p>
            </div>
          </div>
          {/* <div className="col-12 col-lg-6 d-flex justify-content-center px-5 px-lg-0 border border-primary rounded"> */}
          <div className="col-12 col-lg-6 d-flex justify-content-center px-5 px-lg-0 ">
            <form
              className="pb-4 border border-primary rounded p-5"
              // className="pb-4"
              style={{ width: "50%" }}
            >
              <div className="">
                <label className="form-label mt-2" htmlFor="name">
                  Full Name*
                </label>
                <div className="input-group">
                  <input
                    required
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                  />
                  <span className="input-group-text">
                    <CgProfile />
                  </span>
                </div>
              </div>
              <div className="">
                <label className="form-label mt-5" htmlFor="phoneNumber">
                  Phone Number*
                </label>
                <div className="input-group">
                  <span className="input-group-text">91+</span>
                  <input
                    required
                    className="form-control"
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Mobile Number"
                  />
                  <span className="input-group-text">
                    <MdOutlineLocalPhone />
                  </span>
                </div>
              </div>

              <div className="mb-3 form-check mt-5">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="consent1 "
                />
                <label
                  className="form-check-label"
                  htmlFor="consent1 "
                  style={{ fontSize: "10px" }}
                >
                  I confirm to send OTP to the customer as I have verified the
                  National Do Not Call (NDNC) registry for the above customer.
                  The NDNC waiver will be extended to Partners of Andromeda to
                  contact customer for this application.
                </label>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
