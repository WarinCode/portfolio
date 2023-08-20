// * import React
import { useState, useEffect } from "react";

// * import style
// import "/src/style/css/pages.css"
import "/src/style/scss/_pages.scss"

// * import components
import Line from "../layout/Line"
import Loading from "../../Loading"
import { BtnToTop as Btn } from "../layout/BtnToTop"

function Profile({ PropProfile }) {
  const [profile, setProfile] = useState({});
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    (async () => {
      setProfile(await PropProfile);
      setLoadData(true);
    })();
  }, []);

  return (
    <>
      <section className="main-content profile-container">
        {loadData ? (
          <>
            <header>
              <h1>ผลงาน</h1>
            </header>
            <span>
              <p>
                {" "}
                ผลงานต่างๆจะแสดงในหน้านี้ ส่วนมากผลงานของเราจะอยู่ใน{" "}
                <a
                  href="https://github.com/VarinCode?tab=repositories"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "#0ccf0c",
                    fontWeight: "bold",
                  }}
                >
                  github
                </a>{" "}
                ของเรา สามารถกดเข้าไปดูได้
              </p>
            </span>
            <Line />
          </>
        ) : (
          <Loading />
        )}
        <Btn />
      </section>
    </>
  );
}

export default Profile;
