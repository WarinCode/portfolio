// * import React
import { useState, useEffect } from "react"

// * import style
// import "/src/style/css/pages.css"
// import "/src/style/css/education.css"
import "/src/style/scss/_education.scss"
import "/src/style/scss/_pages.scss"

// * import libs
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { FaMapMarkedAlt } from "react-icons/fa"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

// * import components
import Loading from "../../Loading"
import { BtnToTop as Btn } from "../layout/BtnToTop"
import Line from "../layout/Line"
import { notify } from "../../Lib"
import { optionNotify } from "../../Lib"
optionNotify.autoClose = 1800;

function Education({ PropEducation }) {
  const [loadData, setLoadData] = useState(false);
  const [edu, setEdu] = useState({});

  useEffect(() => {
  (async () => {
        setEdu(await PropEducation);
        setLoadData(true);
      })();
  }, []);

  const handleOpenLocation = (link) => {
    notify("กำลังเปิดหน้าแผนที่ Google", "info");
    setTimeout(async () => {
      await new Promise((res, rej) => {
        try {
          res(link);
        } catch (err) {
          rej(err);
        }
      })
        .then((result) => {
          optionNotify.autoClose = 400;
          (async () => {
            await Promise.resolve(notify("เปิดเรียบร้อย!", "success"));
          })();
          return result;
        })
        .then((result) =>
          setTimeout(() => location.replace(String(result)), 1500)
        )
        .catch((err) => {
          throw err;
        });
    }, 4000);
  };
    
  // const { education, education:{school , university} } = edu;
  // console.log(school , university);

  return (
    <section className="main-content education-container">
      <header>
        <h1  >การศึกษาของฉัน</h1>
        <p  >
          การเรียนในแต่ละระดับการศึกษาในช่วงชีวิตของฉัน
        </p>
      </header>
      {loadData ? (
        <div className="swiper-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            speed={500}
            className="swiper"
          >
            {edu?.education?.school.map((sch) => (
              <SwiperSlide className="swiper-slide" key={sch?.id}>
              <div className="swiper-card">
                <img
                  className="card-img"
                  src={sch?.logo}
                  alt={sch?.name}
                />
                <h1 className="card-title font-thai">
                  {sch.name}
                </h1>
                <span className="card-description">
                  <p  >ระยะเวลา: {sch?.time}</p>
                  <p  >สายการเรียน: {sch?.program}</p>
                  <a
                    onClick={() => {
                      handleOpenLocation(sch?.map);
                    }}
                  >
                    <FaMapMarkedAlt className="icon-map" /> ดูสถานที่
                  </a>
                </span>
              </div>
            </SwiperSlide>
            ))}
            <SwiperSlide className="swiper-slide">
              <div className="swiper-card">
                <img
                  className="card-img"
                  src={edu?.education?.university?.logo}
                  alt={edu?.education?.university?.name}
                />
                <h1 className="card-title font-thai">{edu?.education?.university?.name}</h1>
                <span className="card-description">
                  <p  >ระยะเวลา: {edu?.education?.university?.time}</p>
                  <p  >
                    คณะ: {edu?.education?.university?.department}
                  </p>
                  <p  >
                    สาขา: {edu?.education?.university?.major}
                  </p>
                  <a
                    onClick={() => {
                      handleOpenLocation(edu?.education?.university?.map);
                    }}
                  >
                    <FaMapMarkedAlt className="icon-map" /> ดูสถานที่
                  </a>
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <Loading />
      )}
      <Line />
      <Btn/>
    </section>
  );
}

export default Education;
