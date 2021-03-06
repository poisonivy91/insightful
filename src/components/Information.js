import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./InfoStyle.css";

function Info() {
  return (
    <div name="top">
      <Navbar />
      <div class="info">
        <br />
        <h1>Evidence-Based Information</h1>
        <br />
        <h3 id="info">
          Evidence-based recommendations for natural bodybuilding contest
          preparation: nutrition and supplementation
          <br />
          <p id="info">
            The article on evidence-based recommendations has all sorts of
            information including nutrition methods, calorie intake, and
            different types of diets to make your journey to a healthier you
            easy.{" "}
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tandfonline.com/doi/full/10.1186/1550-2783-11-20"
          >
            Read Article Here
          </a>
        </h3>
        <br />
        <h3 id="info">
          Effects of diet cycling on weight loss, fat loss and resting energy
          expenditure in women
          <br />
          <p id="info">
            Effects of diet cycling is a short but information filled article
            that gives methods, Results, and evidence that short-term diet
            cyclingmay be an effective way to promote weight loss.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tandfonline.com/doi/full/10.1186/1550-2783-7-S1-P21"
          >
            Read Article Here
          </a>
        </h3>
        <br />
        <h3 id="info">
          Journal on Targeting Abdominal Obesity Through the Diet
          <br />
          <p id="info">
            A detailed joural to talk about abdominal obesity and how to assess,
            diagnose, and get healthier.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://journals.lww.com/acsm-healthfitness/Fulltext/2018/09000/TARGETING_ABDOMINAL_OBESITY_THROUGH_THE_DIET__What.8.aspx"
          >
            Read Journal Here
          </a>
        </h3>
        <br />
        <h3 id="info">
          Skin Calipers
          <p id="info">Jackson & Pollock 3-Site Skin-Fold Test (Men)</p>
          <img
            id="Skin-Fold"
            alt="Male Skin-Fold"
            src="https://www.estimatebodyfat.com/static/images/body-fat-caliper-measurement-jackson-pollock-3-site-men.png"
          />
          <p id="info">Jackson & Pollock 3-Site Skin-Fold Test (Women)</p>
          <img
            id="Skin-Fold"
            alt="Women Skin-Fold"
            src="https://www.estimatebodyfat.com/static/images/body-fat-caliper-measurement-jackson-pollock-3-site-women.png"
          />
        </h3>
        <Footer />
      </div>
    </div>
  );
}

export default Info;
