import "bootstrap";
import "../styles/app.scss";
import firstImg from "../assets/slide1.avif";
import secondImg from "../assets/slide2.jpg";
import thirdImg from "../assets/slide3.jpg";

const firstSlideImg = document.getElementById("firstSlideImg");
const secondSlideImg = document.getElementById("secondSlideImg");
const thirdSlideImg = document.getElementById("thirdSlideImg");

firstSlideImg.src = firstImg;
secondSlideImg.src = secondImg;
thirdSlideImg.src = thirdImg;
