import React from 'react';
import BodyFatForm from './BodyFatForm';
import './CalculatorsStyles.css';
import Deficit from './Deficit';
import Excess from './Excess';

const Calculators = () => {
  function getHRmaxresults() {
    const age = document.getElementById('HRmaxAge').value;
    const HRmax = 220 - age;
    document.getElementById('hrmax').innerHTML = HRmax;
  }

  function get50perc() {
    const age = document.getElementById('HRmaxAge').value;
    const HRmax = 220 - age;
    const fifty = Number.parseInt(HRmax * 0.5);
    document.getElementById('50perc').innerHTML = fifty;
  }

  function get60perc() {
    const age = document.getElementById('HRmaxAge').value;
    const HRmax = 220 - age;
    const sixty = Number.parseInt(HRmax * 0.6);
    document.getElementById('60perc').innerHTML = sixty;
  }

  function get70perc() {
    const age = document.getElementById('HRmaxAge').value;
    const HRmax = 220 - age;
    const seventy = Number.parseInt(HRmax * 0.7);
    document.getElementById('70perc').innerHTML = seventy;
  }

  function get80perc() {
    const age = document.getElementById('HRmaxAge').value;
    const HRmax = 220 - age;
    const eighty = Number.parseInt(HRmax * 0.8);
    document.getElementById('80perc').innerHTML = eighty;
  }

  function get90perc() {
    const age = document.getElementById('HRmaxAge').value;
    const HRmax = 220 - age;
    const ninety = Number.parseInt(HRmax * 0.9);
    document.getElementById('90perc').innerHTML = ninety;
  }
  function femaleMifflin() {
    const age = document.getElementById('BMRage').value;
    const weight = document.getElementById('weight').value / 2.205;
    const height = document.getElementById('height').value * 2.54;
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    document.getElementById('mResultsF').innerHTML = bmr;
  }

  function femaleHarris() {
    const age = document.getElementById('BMRage').value;
    const weight = document.getElementById('weight').value / 2.205;
    const height = document.getElementById('height').value * 2.54;
    const bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
    document.getElementById('hResultsF').innerHTML = bmr;
  }

  function maleMifflin() {
    const age = document.getElementById('BMRage').value;
    const weight = document.getElementById('weight').value / 2.205;
    const height = document.getElementById('height').value * 2.54;
    const bmr = 10 * weight + 6.25 * height - 5.677 * age - 161;
    document.getElementById('mResultsF').innerHTML = bmr;
  }

  function maleHarris() {
    const age = document.getElementById('BMRage').value;
    const weight = document.getElementById('weight').value / 2.205;
    const height = document.getElementById('height').value * 2.54;
    const bmr = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
    document.getElementById('hResultsF').innerHTML = bmr;
  }

  function convertHeight() {
    const feet = document.getElementById('feet').value;
    const inches = document.getElementById('inches').value;
    const convert = feet * 12 + parseInt(inches);
    document.getElementById('convert').innerHTML = convert;
  }
  return (
    <div className='calculators'>
      <div>


        <Deficit/>
        <Excess/>
        <BodyFatForm/>
        <div id='HRmaxInputs'>
          <h1>HRmax = 220 - Age</h1>
          <h4>
            Enter your age below to get the HRmax for your age: HRmax is your
            max bpm(beats per minute)
          </h4>
          <h4>
            The HRmax Caclulator is meant to give you your max hearts beats per
            minute and allow you to choose one or all percentages to see your
            max at that percent. Afterwards you can look at the Zones below to
            see what exercises or workouts are meant for that percentage. The
            zones below explain what that zone does to your body such as
            improving endurance, best for fat lost, muscle gain, etc!
          </h4>
          <input type='text' id='HRmaxAge' placeholder='Enter Age' required />
          <br />
          <button  id='getHRmaxResults' onClick={getHRmaxresults}>
            Get HRmax
          </button>
          <br />
          <h4>
            HRmax:<span id='hrmax'></span>
          </h4>
          <br/>
          <h4>
            50 Percent:<span id='50perc'></span>
          </h4>
          <button  id='fifty' onClick={get50perc}>
            Get 50%
          </button>
          <h4>
            60 Percent:<span id='60perc'></span>
          </h4>
          <button  id='sixty' onClick={get60perc}>
            Get 60%
          </button>
          <h4>
            70 Percent:<span id='70perc'></span>
          </h4>
          <button  id='seventy' onClick={get70perc}>
            Get 70%
          </button>
          <h4>
            80 Percent:<span id='80perc'></span>
          </h4>
          <button  id='eighty' onClick={get80perc}>
            Get 80%
          </button>
          <h4>
            90 Percent:<span id='90perc'></span>
          </h4>
          <button  id='ninety' onClick={get90perc}>
            Get 90%
          </button>
        </div>
        <div class='ExplainPercent'>
          <h1>Target Heart Rate 60%</h1>
          <h1>"Warm Up"</h1>
          <h4>
          Is the recommended HR for dynamic stretching and/or calisthenic warm up routines
          before continuing to the more strenuous exercises within a workout,
          sport focused movements or physically exerted competitions.
          Minimum timeframe should be no less than 2 minutes of sustained HRmax at 60% target HR,
          with a duration up to 15-20 minutes.
          </h4>
          
          <h1>Target Heart Rate 70%</h1>
          <h1>“Aerobic Exercise” 
            & 
            “Part of the most efficient fat burning methodology (EPOC)”
          </h1>
          <h4>
          Is the recommended HR for Aerobic exercise and more interestingly for the active rest interval in HIIT (High Intensity Interval Training)
          or SIT (Sprint Interval Training) training for the purpose of achieving Excess Post Oxygen Consumption (EPOC).
          EPOC is the amount of oxygen required to restore your body to its normal, resting level of metabolic function
          (called homeostasis).
          It also explains how your body can continue to burn calories long after you’ve finished your workout.
          Running, Cycling, Rowing or Stair steppers are examples of Aerobic exercises
          albeit they could easily be turned into the next Target Heart Rate.
          The key is to sustain a target heart rate of 70% to be within the Aerobic phase.

          </h4>
        
          
   
          <h1>Target Heart Rate 85%+</h1>
          <h1>“Anaerobic Exercise” & “Part of the most efficient fat burning methodology (EPOC)”</h1>
          <h4>
          Is the recommended HR for Anaerobic exercise and in regards to the previously mentioned topic of HIIT,
          SIT and EPOC is the high intensity component to HIIT and SIT. 
          HIIT is the most effective way to stimulate the EPOC effect.
          The body is most efficient at producing Adenosine Triphosphate (ATP) through aerobic metabolism.
          However, at higher intensities when energy is needed immediately, the anaerobic pathways can provide the necessary ATP much more quickly.
          But the body can only sustain the anaerobic phase for about 45sec to 1 minute. Therefore, we can only sustain high-intensity activity for a brief period. 
          We simply run out of energy. HIIT works because ATP is produced by the anaerobic pathways during high-intensity exercise; 
          once that ATP is exhausted, it is necessary to allow ATP to be replenished via the rest interval or active-rest period during HIIT training.
          This active rest period allows aerobic metabolism to produce and replace ATP in the involved muscles. 
          All of this plays a key part into EPOC because of the oxygen deficit between the phases. 
          The volumes of oxygen consumed during the active rest phase of exercise along with the amount 
          that would be consumed if energy demands were met through only the aerobic energy pathway are offset. 

          </h4>
          
          
          
        </div>
      </div>
      <br />
      <div className='BMR'>
        <h1>BMR(Basal Metabolic Rate)</h1>
        <h3>
          Basal Metabloic Rate is the number of calories your body needs to
          accomplish its most basic(basal) life-sustaining functions.
        </h3>
        <h5>If you do not know your height in inches enter below to convert</h5>
        <label>Feet: </label>
        <input type='number' id='feet' />
        <label>Inches: </label>
        <input type='number' id='inches' />
        <h3>
          Height in inches: <span id='convert'></span>
        </h3>
        <button type='btn' id='convertHeight' onClick={convertHeight}>
          Convert Height to inches
        </button>
        <div class='female'>
          <h1 id='FemaleFormula'>BMR Formulas</h1>
          <h4>
            Mifflin Formulas:
            <br /> Male: 10 * weight + 6.25 * height - 5.677 * age - 161 <br />{' '}
            Female: 10 * weight + 6.25 * height - 5 * age + 5 <br /> Harris
            Formulas:
            <br /> Male: 9.247 * weight + 3.098 * height - 4.33 * age + 447.593
            <br /> Female: 13.397 * weight + 4.799 * height - 5.677 * age +
            88.362
          </h4>
          <input type='text' id='BMRage' placeholder='Enter Age' />
          <br />
          <input type='text' id='weight' placeholder='Enter Weight in lbs.' />
          <br />
          <input type='text' id='height' placeholder='Enter height in inches' />
          <br />
          <h4>
            Once you have entered in your information choose gender and you will
            recieve your results. Note: that you will recive different results
            depending on the formula you choose but it will mean the same when
            it comes to activities.
          </h4>
          <br />
          <h4>
            The Mifflin-St Jeor formula calculates yours results based on an
            estimated average.This gives the amount of energy expended per day
            at rest. (How many calories burned on bed rest)
          </h4>
          <br />
          <h1>
            Mifflin Results are: <span id='mResultsF'></span>
          </h1>
          <br />
          <button type='btn' id='getResults' onClick={femaleMifflin}>
            Female Mifflin
          </button>
          <br />
          <button type='btn' id='getResults' onClick={maleMifflin}>
            Male Mifflin
          </button>
          <h4>
            The Harris-Benedict BMR Calculator
          </h4>
          <h1>
            Harris Results are: <span id='hResultsF'></span>
          </h1>
          <button type='btn' id='getResults' onClick={femaleHarris}>
            Female Harris
          </button>
          <br />
          <button type='btn' id='getResults' onClick={maleHarris}>
            Male Harris
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculators;
