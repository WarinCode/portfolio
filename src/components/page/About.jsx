// * import React
import { useState, useEffect } from "react";

// * import style
// import "/src/style/css/pages.css"
// import "/src/style/css/about.css"
import "/src/style/scss/_pages.scss"
import "/src/style/scss/_about.scss"

// * import childeComponents
import Line from "../layout/Line"
import { BtnToTop as Btn } from "../layout/BtnToTop"
import Loading from "../../Loading"

// * import libs
import { FaLaptopCode } from "react-icons/fa"
import { SlArrowRight } from "react-icons/sl"
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, Title, ArcElement, Legend, Tooltip } from "chart.js"
ChartJS.register(Title, ArcElement, Legend, Tooltip );

function About({ PropAbout }) {
  const [about, setAbout] = useState({});
  const [loadData, setLoadData] = useState(false);
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [arrow3, setArrow3] = useState(false);

  useEffect(() => {
    (async () => {
      setAbout(await PropAbout);
      setLoadData(true);
    })();
  }, []);

  const chartData = {
    labels: [
      "การเขียนโปแกรม",
      "การออกแบบ Design",
      "ความคิดสร้างสรรค์",
      "การสื่อสาร",
      "การนำเสนอ",
    ],
    datasets: [
      {
        data: [70, 17, 6, 5, 2], 
        label: "คิดเป็น",
        backgroundColor: [
          "rgba(159, 14, 255, 0.644)",
          "rgb(255, 12, 12)",
          "rgb(27, 241, 241)",
          "rgba(12, 35, 245, 0.829)",
          "rgb(255, 239, 91)",
        ],
        borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <section className="main-content about-container">
        <header className="user-about">
          <h1>เกี่ยวกับตัวฉัน</h1>
          <p>ชื่อจริง: นาย วรินทร์ สายปัญญา ({about?.full_name})</p>
          <p>ชื่อเรียก: วรินทร์ ({about?.first_name})</p>
          <p>ชื่อเล่น: เอก ({about?.nickname})</p>
          <p>แต่คนส่วนมากจะเรียกเราว่า วรินทร์</p>
          <p>
            อายุ {about?.age} ปี เกิดปี {about?.born_year}
          </p>
        </header>
        <Accordion className="Accordion-container" allowZeroExpanded>
          <AccordionItem className="AccordionItem">
            <AccordionItemHeading className="AccordionItemHeading">
              <AccordionItemButton className="AccordionItemButton">
                <div
                  onClick={() => {
                    setArrow2(false);
                    setArrow3(false);
                    setArrow1((bool) => !bool);
                  }}
                >
                  {arrow1 ? (
                    <MdOutlineKeyboardArrowDown className="icon-arrow" />
                  ) : (
                    <MdOutlineKeyboardArrowRight className="icon-arrow" />
                  )}
                  <p>เส้นทางการเขียนโปรแกรม</p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="AccordionItemPanel">
              <p>
                จุดเริ่มต้นของการเขียนโปรแกรมเริ่มตั้งแต่ตอน ม.3
                ที่คุณครูได้สอนภาษา C
                ตอนนั้นรู้สึกเริ่มสนใจจากการเขียนโค้ดพวกนั้น
                แต่แค่สนใจในอยากเรียนเรื่องนั้นมากขึ้นแต่ยังไม่ได้เริ่มศึกษาเรียนจริงๆจังๆจนได้เข้าเรียนในช่วง
                ม.4 ได้ตัดสินใจเรียนสาย (วิทย์คอม)
                เพื่อจะได้เรียนเรื่องพวกนั้นเพิ่มจนกระทั้งมา ม.5
                เป็นช่วงที่เริ่มเรียนและศึกษาแบบเอาจริงจัง
                และมีความคิดที่อยากทำงานพวกงานเขียนภาษาโปรแกรมหรืออาชีพ
                โปรแกรมเมอร์ เริ่มสนใจการทำเว็บไซต์ในตอนนั้น
                เขียนเป็นแค่ภาษาเดียวคือ HTML แล้วลองไปทำเว็บเล่นๆดู
                ได้จับเครื่องมือจริงๆเจอหลายภาษาอย่าง CSS , JS
                ช่วงนั้นรู้สึกตัวเองอ่อนหัดและโง่มากที่สร้างเว็บไซต์ด้วยแค่ภาษา
                HTML อย่างเดียวเลยไปศึกสกิลเพิ่มโดยเรียน JS
                ก็ทำให้ได้เข้าใจเรื่องของการเขียนโปรแกรมมากขึ้นเริ่มทยอยศึก CSS
                ทีละนิดหน่อยก็พอเข้าใจการออกแบบตกแต่งเว็บไซต์
                ทั้งหมดนี้เพียงพอต่อการสร้างเว็บไซต์แบบพื้นฐานหาอ่านหาดูคลิปสอนต่างๆเพื่อให้ตัวเองเข้าใจและยกระดับการพัฒนาความรู้ความสามารถให้สูงขึ้น
                จนได้ศึกภาษา JavaScript
                เข้าใจระดับนึงจึงเริ่มทำโปรเจคเว็บไซต์ง่ายๆและอัปผลงานขึ้นบนเว็บไซต์{" "}
                <b>Github</b>{" "}
                ตั้งแต่ตอนนั้นเป็นต้นมาก็เป็นคนคิดทำแต่โปรเจคทำผลงานตลอดจนพอมีความกระหายที่จะเรียนรู้เรื่องสิ่งใหม่ๆเสมอ
                จนภาษา JavaScript
                เป็นภาษาที่ตัวเองถนัดที่สุดและได้ต่อยอดไปเรียนภาษา TypeScript
                ช่วงเวลานั้นเป็นช่วงที่จะเข้าศึกษาต่อมหาวิทยาลัยเรื่องทำโปรเจคกับฝึกภาษาโปรแกรมก็ต้องงดเพลาลงไปจนหลังสอบเสร็จและได้มีที่เรียนต่อ
                จึงเริ่มฝึกภาษาโปรแกรมอื่นๆอย่าง Python , C ถึงในปัจจุบัน
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="AccordionItem">
            <AccordionItemHeading className="AccordionItemHeading">
              <AccordionItemButton className="AccordionItemButton">
                <div
                  onClick={() => {
                    setArrow1(false);
                    setArrow3(false);
                    setArrow2((bool) => !bool);
                  }}
                >
                  {arrow2 ? (
                    <MdOutlineKeyboardArrowDown className="icon-arrow" />
                  ) : (
                    <MdOutlineKeyboardArrowRight className="icon-arrow" />
                  )}
                  <p>ชีวิตในวัยเรียน</p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="AccordionItemPanel">
              <p>ว่างๆจะมาเขียน ...</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="AccordionItem">
            <AccordionItemHeading className="AccordionItemHeading">
              <AccordionItemButton className="AccordionItemButton">
                <div
                  onClick={() => {
                    setArrow1(false);
                    setArrow2(false);
                    setArrow3((bool) => !bool);
                  }}
                >
                  {arrow3 ? (
                    <MdOutlineKeyboardArrowDown className="icon-arrow" />
                  ) : (
                    <MdOutlineKeyboardArrowRight className="icon-arrow" />
                  )}
                  <p>เป้าหมาย</p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="AccordionItemPanel">
              <p>
                เป้าหมายแรกที่ต้องทำให้ได้ก่อนคือ มีงานทำที่ยั่งยืนมีรายได้ตลอด
                เป้าหมายที่สำคัญในช่วงเวลานี้ เป้าหมายอื่นๆต่อมาคือ
                การเข้าใจภาษาโปรแกรมยอดฮิตทุกภาษาทุก tool และ ทุก framework
                อยากฝึกให้ใช้งานเป็นได้ทุกอย่าง เป้าหมายต่อมาคือ
                ได้ทำงานสายงานที่ตัวเองเลือกไว้อย่าง Frontend dev หรือ Fullstack
                dev
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Line />
        <header>
          <h1>ความสามารถของฉัน</h1>
          <p style={{ textAlign: "start" }}>
            โดยปกติแล้วเราเป็นคนชื่นชอบการทำเว็บไซต์
            ความสามารถส่วนใหญ่ของเราก็จะเกี่ยวกับภาษาที่ใช้ในการสร้างเว็บไซต์
            ส่วนภาษาโปรแกรมอื่นๆก็กำลังศึกษา
          </p>
        </header>
        {loadData ? (
          <div className="my-stack-container">
            <div className="box-item" id={"id-1"}>
              <span className="text-inline">
                <FaLaptopCode className="icon-LaptopCode" />
                <h2>ภาษา: </h2>
              </span>
              <div className="box-material">
                <p>
                  <SlArrowRight className="icon-SlArrowRight" />
                  &nbsp;{about?.my_stack?.languages.join(" , ")}
                </p>
                <div className="b-underline"></div>
              </div>
              <span className="languages-group">
                {about.my_stack.logo.lang.map((val, idx) => (
                    <img
                      src={val}
                      key={idx}
                      alt={about.my_stack.languages[idx]}
                    />
                  ))}
              </span>
            </div>
            <div className="box-item" id={"id-2"}>
              <span className="text-inline">
                <FaLaptopCode className="icon-LaptopCode" />
                <h2>framework: </h2>
              </span>
              <div className="box-material">
                <p>
                  <SlArrowRight className="icon-SlArrowRight" />
                  &nbsp;{about?.my_stack?.frontend_framework[0]}
                </p>
                <div className="b-underline"></div>
              </div>
              <span className="languages-group">
                <img
                  src={about?.my_stack?.logo?.Reactjs}
                  alt={about?.my_stack?.frontend_framework[0]}
                />
              </span>
            </div>
            <div className="box-item" id={"id-3"}>
              <span className="text-inline">
                <FaLaptopCode className="icon-LaptopCode" />
                <h2>ภาษาที่กำลังเรียน (Programimg Languages): </h2>
              </span>
              <div className="box-material">
                <p>
                  <SlArrowRight className="icon-SlArrowRight" />
                  &nbsp;{about?.my_stack?.studying_language.join(" , ")}
                </p>
                <div className="b-underline"></div>
              </div>
              <span className="languages-group">
                { about.my_stack.logo.std_lang.map((val, idx) => (
                  <img
                    src={val}
                    key={idx}
                    alt={about.my_stack.studying_language[idx]}
                  />
                )) 
              }
              </span>
            </div>
          </div>
        ) : (
          <Loading />
        )}
        <section className="chart-container">
          <div id="myChart">
            <Doughnut type="doughnut" data={chartData} datasetIdKey="myData" />
          </div>
          <div className="chart-details">
            <h3>ความสามารถแบ่งเป็นสัดส่วน 100%</h3>
            <ul>
              <li>การเขียนโปแกรม 70%</li>
              <li>การออกแบบ Design 17%</li>
              <li>ความคิดสร้างสรรค์ 6%</li>
              <li>การสื่อสาร 5%</li>
              <li>การนำเสนอ 2%</li>
            </ul>
          </div>
        </section>
        <Line />
        <Btn />
      </section>
    </>
  );
}

export default About;
