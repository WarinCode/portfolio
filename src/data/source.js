// import fs from "fs";
//
// import { generateID , myTel , generateHouseNumber } from "./api.js";
//
// const userData = {
//   first_name: "Warin",
//   last_name: "Saipanya",
//   full_name: "Warin Saipanya",
//   nickname: "Hrk",
//   avatar: "/src/assets/user/img/user-img.jpg",
//   gender: "male",
//   age: 19,
//   born_year: 2004,
//   tel: myTel,
//   email: "warinsaipanya@protonmail.com",
//   quotation: "",
//
//   social_links: {
//     ig: "https://www.instagram.com/varin.jsx/",
//     facebook: "https://web.facebook.com/varin.saypanya.33/",
//     github: "https://github.com/VarinCode",
//     stackoverflow:
//       "https://stackoverflow.com/users/17977124/9%e0%b8%97%e0%b8%b8%e0%b8%99",
//     twitter: "https://twitter.com/VarinCode",
//     spotify:
//       "https://open.spotify.com/user/31xvj63svkvkxttiq5sbh7ldl3bm?si=9753c530fe5144f9",
//   },
//   address: {
//     country: "Thailand",
//     province: "Chonburi",
//     district: "Sriracha",
//     house_number: generateHouseNumber(),
//     zip_code: "20230",
//   },
//   education: {
//     school: [
//       {
//         id: generateID(4),
//         name: "เมืองพัทยา 5",
//         program: "normal",
//         time: "อ.1 - อ.3",
//         logo: "/src/assets/user/school_logo/school5.png",
//         map: "https://www.google.com/maps/place/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2+5+(%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%99%E0%B8%B4%E0%B8%99%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%98%E0%B8%A2%E0%B8%B2%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B7%E0%B8%AD)/@12.9332099,100.8969387,17z/data=!4m6!3m5!1s0x310295e5486eaae5:0xa9fa59dbb1192843!8m2!3d12.9332047!4d100.8995136!16s%2Fg%2F11d_9k6x2m?entry=ttu",
//       },
//       {
//         id: generateID(4),
//         name: "เมืองพัทยา 9 วัดโพธิสัมพันธ์",
//         program: "Math & Sci",
//         time: "ป.1 - ม.3",
//         logo: "/src/assets/user/school_logo/school9.png",
//         map: "https://www.google.com/maps/place/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2+9+(%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%82%E0%B8%9E%E0%B8%98%E0%B8%B4%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C)/@12.9609416,100.8915191,17z/data=!3m1!4b1!4m6!3m5!1s0x310296080fc7db0f:0x4494b2414da09291!8m2!3d12.9609364!4d100.894094!16s%2Fg%2F11ddx9j33n?entry=ttu",
//       },
//       {
//         id: generateID(4),
//         name: "โพธิสัมพันธ์พิทยาคาร",
//         program: "Com & Sci",
//         time: "ม.4 - ม.6",
//         logo: "/src/assets/user/school_logo/PSP.png",
//         map: "https://www.google.com/maps/place/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9E%E0%B8%98%E0%B8%B4%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C%E0%B8%9E%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3/@12.9625287,100.8915094,17z/data=!3m1!4b1!4m6!3m5!1s0x3102be0bfcb5a09b:0xefc098d89644199!8m2!3d12.9625235!4d100.8940843!16s%2Fg%2F1ym_l63j5?entry=ttu",
//       },
//     ],
//     university: {
//       name: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา",
//       department: "Faculty of Science",
//       major: "Computer Science",
//       time: "ปี1 - ปี4",
//       logo: "/src/assets/user/school_logo/KU.png",
//       map: "https://www.google.com/maps/place/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%95%E0%B8%A3%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C+%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%B2/@13.1209296,100.9166242,17z/data=!3m1!4b1!4m6!3m5!1s0x3102b67ef835f265:0x963c6129282e5cb!8m2!3d13.1209244!4d100.9191991!16s%2Fg%2F121wh_0d?entry=ttu",
//     },
//   },
//   my_stack: {
//     dev: "Frontend Developer",
//     goal: "Full Stack Developer",
//     languages: ["Html", "Css", "Sass", "Javascript", "Typescript"],
//     studying_language: ["Python", "C", "C++"],
//     frontend_framework: ["React"],
//     css_framework: ["bootstrp5"],
//     logo: {
//       Html:'/src/assets/user/languages/HTML5.svg',
//       Css:'/src/assets/user/languages/CSS3.svg',
//       Sass:'/src/assets/user/languages/Sass.svg',
//       Javascript:'/src/assets/user/languages/JavaScript.svg',
//       Typescript:'/src/assets/user/languages/TypeScript.svg',
//       Python:'/src/assets/user/languages/Python.svg',
//       C:'/src/assets/user/languages/C.svg',
//       Cpp:'/src/assets/user/languages/C++ (CPlusPlus).svg',
//       Reactjs:'/src/assets/user/framework/React.svg'
//     },
//   },
// };