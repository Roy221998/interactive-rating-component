const Button = ({ number,setRatingValue }) => {
  return (
    <button onClick={()=>setRatingValue(number)} className="btn-number bg-gray-700 h-10 w-10 rounded-full focus:bg-gray-400 transition duration-150">
      {number}
    </button>
  );
};

export default Button
