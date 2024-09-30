import { useState } from "react";
import ThankYou from "./components/ThankYou";
import Button from "./components/Button";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ratingValue, setRatingValue] = useState();

  return (
    <>
      {!isSubmitted ? (
        <div className="wrapper">
          <img
            src="../src/images/icon-star.svg"
            alt="star"
            className="bg-slate-700 rounded-full p-2"
          />
          <h1 className="text-3xl my-6">How did we do?</h1>
          <p className="my-6">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="grid grid-cols-5 gap-3 p-5 my-6 text-center ">
            <div>
              <Button number={1} setRatingValue={setRatingValue} />
            </div>
            <div>
              <Button number={2} setRatingValue={setRatingValue} />
            </div>
            <div>
              <Button number={3} setRatingValue={setRatingValue} />
            </div>
            <div>
              <Button number={4} setRatingValue={setRatingValue} />
            </div>
            <div>
              <Button number={5} setRatingValue={setRatingValue} />
            </div>
          </div>
          <button className="btn-rating" onClick={() => setIsSubmitted(true)}>
            SUBMIT
          </button>
        </div>
      ) : (
        <ThankYou setIsSubmitted={setIsSubmitted} ratingValue={ratingValue} />
      )}
    </>
  );
}

export default App;
