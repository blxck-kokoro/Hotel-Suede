import "bootstrap";
import "../styles/app.scss";
import firstImg from "../assets/slide1.avif";
import secondImg from "../assets/slide2.jpg";
import thirdImg from "../assets/slide3.jpg";

import aboutUsImg from "../assets/aboutUs.jpg";

import standardRoomImg from "../assets/standardRoom.jpg";
import deluxeSuiteImg from "../assets/deluxeSuite.jpg";
import executiveRoomImg from "../assets/executiveRoom.jpg";
import familyRoomImg from "../assets/familyRoom.jpg";
import honeymoonSuiteImg from "../assets/honeymoonSuite.jpg";
import penthouseSuiteImg from "../assets/penthouseSuite.jpg";

const firstSlideImg = document.getElementById("firstSlideImg");
const secondSlideImg = document.getElementById("secondSlideImg");
const thirdSlideImg = document.getElementById("thirdSlideImg");

const aboutUsSectionImg = document.getElementById("aboutUsImg");

const standardRoomImage = document.getElementById("standardRoomImg");
const deluxeSuiteImage = document.getElementById("deluxeSuiteImg");
const executiveRommImage = document.getElementById("executiveRoomImg");
const familyRoomImage = document.getElementById("familyRoomImg");
const honeymoonSuiteImage = document.getElementById("honeymoonSuiteImg");
const penthouseSuiteImage = document.getElementById("penthouseSuiteImg");

firstSlideImg.src = firstImg;
secondSlideImg.src = secondImg;
thirdSlideImg.src = thirdImg;

aboutUsSectionImg.src = aboutUsImg;

standardRoomImage.src = standardRoomImg;
deluxeSuiteImage.src = deluxeSuiteImg;
executiveRommImage.src = executiveRoomImg;
familyRoomImage.src = familyRoomImg;
honeymoonSuiteImage.src = honeymoonSuiteImg;
penthouseSuiteImage.src = penthouseSuiteImg;
