import React from 'react'
import './CalculatorsStyles.css'
import Deficit from './Deficit'

const Calculators = () => {
  function getHRmaxresults() {
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    document.getElementById("hrmax").innerHTML = HRmax;
  }

  function get50perc() {
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    const fifty = HRmax * 0.5;
    document.getElementById("50perc").innerHTML = fifty;
  }

  function get60perc() {
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    const sixty = HRmax * 0.6;
    document.getElementById("60perc").innerHTML = sixty;
  }

  function get70perc() {
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    const seventy = HRmax * 0.7;
    document.getElementById("70perc").innerHTML = seventy;
  }

  function get80perc() {
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    const eighty = HRmax * 0.8;
    document.getElementById("80perc").innerHTML = eighty;
  }

  function get90perc() {
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    const ninety = HRmax * 0.9;
    document.getElementById("90perc").innerHTML = ninety;
  }
  function femaleMifflin() {
    const age = document.getElementById("BMRage").value;
    const weight = document.getElementById("weight").value / 2.205;
    const height = document.getElementById("height").value * 2.54;
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    document.getElementById("mResultsF").innerHTML = bmr;
  }

  function femaleHarris() {
    const age = document.getElementById("BMRage").value;
    const weight = document.getElementById("weight").value / 2.205;
    const height = document.getElementById("height").value * 2.54;
    const bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
    document.getElementById("hResultsF").innerHTML = bmr;
  }

  function maleMifflin() {
    const age = document.getElementById("BMRage").value;
    const weight = document.getElementById("weight").value / 2.205;
    const height = document.getElementById("height").value * 2.54;
    const bmr = 10 * weight + 6.25 * height - 5.677 * age - 161;
    document.getElementById("mResultsF").innerHTML = bmr;
  }

  function maleHarris() {
    const age = document.getElementById("BMRage").value;
    const weight = document.getElementById("weight").value / 2.205;
    const height = document.getElementById("height").value * 2.54;
    const bmr = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
    document.getElementById("hResultsF").innerHTML = bmr;
  }

  function convertHeight() {
    const feet = document.getElementById("feet").value;
    const inches = document.getElementById("inches").value;
    const convert = feet * 12 + parseInt(inches);
    document.getElementById("convert").innerHTML = convert;
  }
  return (
    <div className='calculators'>
        <div>
      <div id="HRmaxInputs">
        <h1>HRmax = 220 - Age</h1>
        <h4>
          Enter your age below to get the HRmax for your age: HRmax is your max
          bpm(beats per minute)
        </h4>
        <h4>
          The HRmax Caclulator is meant to give you your max hearts beats per
          minute and allow you to choose one or all percentages to see your max
          at that percent. Afterwards you can look at the Zones below to see
          what exercises or workouts are meant for that percentage. The zones
          below explain what that zone does to your body such as improving
          endurance, best for fat lost, muscle gain, etc.
        </h4>
        <input type="text" id="HRmaxAge" placeholder="Enter Age" required />
        <br />
        <button type="btn" id="getHRmaxResults" onClick={getHRmaxresults}>
          Get 50%
        </button>
        <br />
        <h4>
          HRmax:<h3 id="hrmax"></h3>
        </h4>
        <h4>
          50 Percent:<h3 id="50perc"></h3>
        </h4>
        <button type="btn" id="fifty" onClick={get50perc}>
          Get 50%
        </button>
        <h4>
          60 Percent:<h3 id="60perc"></h3>
        </h4>
        <button type="btn" id="sixty" onClick={get60perc}>
          Get 60%
        </button>
        <h4>
          70 Percent:<h3 id="70perc"></h3>
        </h4>
        <button type="btn" id="seventy" onClick={get70perc}>
          Get 70%
        </button>
        <h4>
          80 Percent:<h3 id="80perc"></h3>
        </h4>
        <button type="btn" id="eighty" onClick={get80perc}>
          Get 80%
        </button>
        <h4>
          90 Percent:<h3 id="90perc"></h3>
        </h4>
        <button type="btn" id="ninety" onClick={get90perc}>
          Get 90%
        </button>
      </div>
      <div class="ExplainPercent">
        <h1>Zone 1: 50-60%</h1>
        <h4>
          In zone 1 you will be at a Very Light workouts/ exercises to get
          warmed up, cool down, or recovery. Getting warmed up and stretched out
          is important before moving on to other zones. If not you are more
          prone to injury.
        </h4>
        <h4>
          Example workouts:<br /> walking at casual pace, light jog, elliptical
          machine, cycling at casual pace, and rowing at a steady pace
        </h4>
        <h1>Zone 2: 60-70%</h1>
        <h4>
          In zone 2 you will be doing Light exercises/ workouts that you should
          be able to do for a long period of time. In this zone you will be
          improving your general endurance which means it will get better at
          oxidizing burning fat and muscle fitness along with capillary density
          will increase.
        </h4>
        <h4>
          Example workouts:<br /> walking at casual pace, light jog, elliptical
          machine, cycling at casual pace, and rowing at a steady pace
        </h4>
        <h1>Zone 3: 70-80%</h1>
        <h4>
          In zone 3 you will be at Moderate Level workouts that will improve the
          efficiency of clood circulation in skeletal mucles along with the
          heart. This zone will improve efficiently, make moderate efforts
          easier, and start producing lactic acid build up in your bloodstream.
        </h4>
        <h4>
          Example workouts:<br /> walking two miles in 30 minutes, biking five miles
          in 30 minutes, swimming laps for 20 minutes, playing volleyball for 45
          minutes
        </h4>
        <h1>Zone 4: 80-90%</h1>
        <h4>
          In zone 3 you will be at Hard level workouts/ exercises that will be
          aerobic and leave you breathing hard. This zone will improve your
          speed endurance and make your body better at using carbohydrates for
          energy. Your body will also get better at withstanding higher and
          higher levels of lactic acid build up in your bloodstream.
        </h4>
        <h4>
          Example workouts:<br /> Jump lunge. Work 20sec Rest 10sec. Explode off the
          ground and change legs in the air on each rep, high knees. Work 20sec
          Rest 10sec. Run on the spot, bringing your knees as high as possible,
          jump squat, do about 8 times to complete hard intenstiy
        </h4>
        <h1>Zone 5: 90-100%</h1>
        <h4>
          In zone 5 you will be at the Extreme level workouts/ exercises will be
          for a short duration and will be using maximum efforts. The reason
          this zone is only for a few minutes is because the lactic acid build
          up will happen faster and will not be able to continue at this
          intensity. This intenisty is for expercienced training and is not
          recommended for people just starting their fitness journey.
        </h4>
        <h4>
          Example workouts:<br /> do 5 rounds of 5x Back Squat or Difficult but
          Doable, 2x Broad Jumps, 60 second rest and while resting do the Pec
          Ball
        </h4>
      </div>
    </div><br />
    <div className="BMR">
      <h1>BMR(Basal Metabolic Rate)</h1>
      <h3>
        Basal Metabloic Rate is the number of calories your body needs to
        accomplish its most basic(basal) life-sustaining functions.
      </h3>
      <h5>If you do not know your height in inches enter below to convert</h5>
      <label>Feet: </label>
      <input type="number" id="feet" />
      <label>Inches: </label>
      <input type="number" id="inches" />
      <h3>
        Height in inches: <h3 id="convert"></h3>
      </h3>
      <button type="btn" id="convertHeight" onClick={convertHeight}>
        Convert Height to inches
      </button>
      <div class="female">
        <h1 id="FemaleFormula">BMR Formulas</h1>
        <h2>
          Mifflin Formulas:
          <br /> Male: 10 * weight + 6.25 * height - 5.677 * age - 161 <br />{" "}
          Female: 10 * weight + 6.25 * height - 5 * age + 5 <br /> Harris
          Formulas:
          <br /> Male: 9.247 * weight + 3.098 * height - 4.33 * age + 447.593
          <br /> Female: 13.397 * weight + 4.799 * height - 5.677 * age + 88.362
        </h2>
        <input type="text" id="BMRage" placeholder="Enter Age" />
        <br />
        <input type="text" id="weight" placeholder="Enter Weight in lbs." />
        <br />
        <input type="text" id="height" placeholder="Enter height in inches" />
        <br />
        <h4>
          Once you have entered in your information choose gender and you will
          recieve your results. Note: that you will recive different results
          depending on the formula you choose but it will mean the same when it
          comes to activities.
        </h4>< br />
        <h4>
          The Mifflin-St Jeor formula calculates yours results based on an
          estimated average.This gives the amount of energy expended per day at
          rest. (How many calories burned on bed rest)
        </h4><br />
        <h1>
          Mifflin Results are: <h2 id="mResultsF"></h2>
        </h1>
        <br />
        <button type="btn" id="getResults" onClick={femaleMifflin}>
          Female Mifflin
        </button>
        <br />
        <button type="btn" id="getResults" onClick={maleMifflin}>
          Male Mifflin
        </button>
        <h5>
          The Harris-Benedict is the amount of energy required to maintain the
          body's normal metabolic activity, such as respiration, maintenance of
          body temperature (thermogenesis), and digestion.
        </h5>
        <h1>
          Harris Results are: <h2 id="hResultsF"></h2>
        </h1>
        <button type="btn" id="getResults" onClick={femaleHarris}>
          Female Harris
        </button>
        <br />
        <button type="btn" id="getResults" onClick={maleHarris}>
          Male Harris
        </button>
      </div>
    </div>
    </div>
  )
}

export default Calculators