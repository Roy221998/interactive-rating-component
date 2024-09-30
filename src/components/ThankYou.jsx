const ThankYou = ({ setIsSubmitted, ratingValue }) => {
  return (
    <div className="wrapper">
      <img
        src="../../src/images/illustration-thank-you.svg"
        alt="illustration"
        className="block mx-auto mb-5"
      />
      <div className="flex items-center justify-center">
        <p className="p-rating bg-gray-700 rounded-full text-center text-sm px-4 pt-1">
          You selected {ratingValue} out of 5
        </p>
      </div>
      <h2 className="text-3xl my-6 text-center">Thank You!</h2>
      <p className="my-6 text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      <button className="btn-rating" onClick={() => setIsSubmitted(false)}>
        RATE AGAIN
      </button>
    </div>
  );
};

export default ThankYou;
