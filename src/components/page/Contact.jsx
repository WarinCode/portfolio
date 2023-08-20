// * import React
import { useState, useEffect } from "react"

// * import style
import "/src/style/scss/_pages.scss"

// * import components
import Line from "../layout/Line"
import Loading from "../../Loading"
import { BtnToTop as Btn } from "../layout/BtnToTop"

// * import libs
import { BsTelephoneFill } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function Contact({ PropContact }) {
  const [contact, setContact] = useState({});
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    (async () => {
      setContact(await PropContact);
      setLoadData(true);
    })();
  }, []);

  // console.log(address , tel , email);

  return (
    <section className="main-content contact-container">
      {loadData ? (
        <>
          <header>
            <h1>ติดต่อฉัน</h1>
            <p>ช่องทางการติดต่อของฉัน</p>
          </header>
          <section className="card-container">
            <div className="card card-1">
              <div className="card-body">
                <span className="distance"></span>
                <BsTelephoneFill className="card-icon" />
                <h2 className="font-thai">เบอร์โทรติตต่อ</h2>
                <p className="font-thai">{contact?.tel}</p>
              </div>
            </div>
            <div className="card card-2">
              <div className="card-body">
                <span className="distance"></span>
                <FaMapMarkerAlt className="card-icon" />
                <h2 className="font-thai">ที่อยู่</h2>
                <p className="font-thai">
                  ประเทศ {contact?.address?.country} จังหวัด {contact?.address?.province} อำเภอ{" "}
                  {contact?.address?.district} บ้านเลขที่ {contact?.address?.house_number}
                </p>
              </div>
            </div>
            <div className="card card-3">
              <div className="card-body">
                <span className="distance"></span>
                <MdEmail className="card-icon" />
                <h2 className="font-thai">อีเมล</h2>
                <p className="font-thai" style={{ fontSize: "14px" }}>
                  {contact?.email}
                </p>
              </div>
            </div>
          </section>
          <Line />
        </>
      ) : (
        <Loading />
      )}
      <Btn />
    </section>
  );
}

export default Contact;
