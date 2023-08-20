// * import react
import React from "react";

// * import libs
import { HttpStatusCode } from "axios";
import { MdOutlineErrorOutline } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { optionNotify, notify } from "/src/Lib";

// * import style
// import "./err.css";
import "./_err.scss";

function NotFound() {
  const notFound404 = HttpStatusCode.NotFound;
  optionNotify.theme = "dark";
  optionNotify.autoClose = 3000;

  React.useEffect(() => {
    setTimeout(
      (() =>
        notify("ไม่มีหน้าเว็บเพจที่คุณเรียกหานี้อยู่ในเว็บไซต์!", "error"))(),
      2000
    );
  }, []);

  const handleBackHome = () => {
    notify("กำลังพาคุณกลับไปที่หน้าเว็บหลัก", "info");
    setTimeout(() => (window.location.href = "/"), 3000);
  };

  return (
    <>
      <section className="notFound404-container">
        <ToastContainer />
        <div>
          <MdOutlineErrorOutline className="icon-404" />
        </div>
        <h1 className="title">{notFound404} NotFound</h1>
        <details open="true">
          <summary>
            <BiDetail className="icon-detail" />
            &nbsp;Show detailes
          </summary>
          <p>
            The page you are looking for cannot be found or the url you have
            entered is invalid.
          </p>
          <button className="btn-back" onClick={handleBackHome}>
            back
          </button>
        </details>
      </section>
    </>
  );
}

export default NotFound;
