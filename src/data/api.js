import axios, { HttpStatusCode, isAxiosError } from "axios";

// * สร้าง id ตัวเลข
export const generateID = (lenght) => {
  let ID = "";
  const newGenerate = (newID = Math.floor(Math.random() * 9)) => newID;
  const randomID = () => {
    for (let i = 0; i < lenght; i++) {
      let numID = newGenerate();
      ID += numID;
    }
  };
  randomID();
  return ID;
};

// * สร้างหมายเลขโทรศัพท์แบบสุ่ม
const randomNumber = (l = 11 - 1) => {
  let numCode = "0";
  for (let i = 0; i <= l; i++) {
    numCode += Math.round(Math.random() * 10);
  }
  return numCode;
};

const tel = (recive) => {
  let arrString = String(recive).split("");
  let arrCharX = [..."xxx-xxx-xxxx"];
  for (let i in arrString) {
    if (i == 3 || i == 7) continue;
    else arrCharX[i] = arrString[i];
  }
  const telNumber = arrCharX.join("");
  return telNumber;
};

export const myTel = tel(randomNumber());

// * สร้างที่อยู่แบบสุ่ม
export const generateHouseNumber = () => {
  let form = [..."xx/xxx"];
  let houseNumber = "";
  for (const char of form) {
    let num = Math.floor(Math.random() * 6);
    if (char === "/") {
      houseNumber += char;
    } else {
      houseNumber += char.replace("x", num.toString());
    }
  }
  return houseNumber;
};

// * ส่งข้อมูล api
export default async function fetchAPI() {
  let statusCode = { ...HttpStatusCode };
  try {
    const response = await axios.get("/src/data/json/data.json");
    const getData = await response.data;
    getData.tel = myTel;
    getData.address.house_number = generateHouseNumber();
    getData.education.school.map((v) => (v.id = generateID(4)));
    return await getData;
  } catch (err) {
    if (Boolean(err) || statusCode.BadRequest === 400 || isAxiosError()) {
      statusCode.Ok = 0;
      // throw new Error(err);
      console.error(err)
    }
  } finally {
    statusCode.Ok === 200 &&
      console.info("ส่งข้อมูลไปให้ Components หลักเรียบร้อย!");
  }
}
