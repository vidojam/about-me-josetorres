import { useState } from "react";
import ReactDOM from "react-dom";




export default function Aboutme() {

  // State to show/hide accordion
  const [show, setShow] = useState();
  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };
 
  return (
    <div className="app">
      {/* <h1 className= "font1" >About Me - Jose Torres</h1> */}
      <div className="container">
       
      </div>
        <div className="accordian">
          <div className="accordian-header" onClick={handleOpen}>
            <div>   A Favorite Quote</div>
            <div className="sign">{show ? '-' : '+'}</div>
          </div>
        {show && (
          <div className="accordian-body">
             Motivation is what gets you started. Habit is what keeps you going. - Jim Rohn
          </div>
        )}
      </div>
      <>
      <h2>Who am I?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima quasi hic blanditiis, dolor unde, ducimus soluta in vero cupiditate sed error rerum non vel velit quos? Eligendi, sequi perferendis?</p>
      <h2>Why Boca Code?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima quasi hic blanditiis, dolor unde, ducimus soluta in vero cupiditate sed error rerum non vel velit quos? Eligendi, sequi perferendis?</p>
      <h2>Future project ideas?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima quasi hic blanditiis, dolor unde, ducimus soluta in vero cupiditate sed error rerum non vel velit quos? Eligendi, sequi perferendis?</p>
      <h2>The Ideal Workplace?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima quasi hic blanditiis, dolor unde, ducimus soluta in vero cupiditate sed error rerum non vel velit quos? Eligendi, sequi perferendis?</p>
      </>  
    </div>
   );
}



    

// Image- A professional Image of yourself(you will have the opportunity to update the photo once we take head shots)
// MY PHOTO

// Quote- A personal mantra or favorite quote
// MOTIVATION IS WHAT GETS YOU STARTED. HABIT IS WHAT KEEPS YOU GOING.- JIM ROHN 

// Who You Are- A brief paragraph describing who you are, including a fun fact, your background, and your goals after completing the course(no more than 3-4 sentences).
// 10 STRIKES IN A ROW, FOR A 289 BOWLING SCORE. JUST A LITTLE BIT FROM A PERFECT SCORE, BUT WHAT A JOURNEY!, 


// Why BC- An explanation of why you chose Boca Code, and what motivated you to pursue a career in software engineering.
// RETURNING TO A PREVIOUS LOVE, CODING, SEEMED LIKE JUST THE RIGHT THING TO DO IN RETIREMENT FOR 5, 10, 15…? YEARS!!!



// Projects- Now that you have a new superpower, what is one project/idea you are looking forward to build? 

// MY PROJECT IDEA FOR THE MOMENT IS IN THE AREA OF STOCKS, AND HOW WE CAN HAVE AN ADDITIONAL TOOL TO MAKE THOSE BUYING DECISIONS



// :female_superhero::male_superhero:
// Ideal Workplace- What  qualities do you look for in your ideal workplace or dream company(culture etc)?
// BOCA CODE IS A GREAT EXAMPLE OF AN IDEAL WORKPLACE. EVERY WEEK FINISHES WITH THINGS GETTING DONE, ALMOST WITHOUT MANAGEMENT. EACH PERSON WORKS TOWARDS DOING THERE BEST FOR THEMSELVES AND THE ORGANIZATION. 

// Please note that your “About Me” page MUST be a React app, using React components and a minimum of 2-3 React hooks.
// Due Date:
// All assignment links must be posted on slack no later than Friday April 21, 2023 at 9:00am. Any assignment submitted AFTER 9:00am will NOT be accepted. (Due Before class on 



