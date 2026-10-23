// // import "./card.css";

// const Card = ({ title, img, desc }) => {
//   let marks = 45
//   let b = marks>40?"passed":"fail"
  
//   return (
//     <>
//       <div className="card , bg-green-900 rounded-2xl">
//         <h1>Card Component</h1    >

//         <div>
//           <img
//             className="img"
//             src={img}
//             alt="image component"
//           />
//         </div>

//         <div>chess board</div>

//         <div>
//           <div className="title">{title}</div>
//           <div className="desc">{desc}</div>
//         </div>

//         <div>abcdefghijkl</div>

//         <div className="button">
//           <button>  
//             click me
//           </button>
//         <div className={b}>{b} </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Card;


// tailwindcss


// import "./card.css";

const Card = ({ title, img, desc }) => {
  let marks = 45
  let b = marks>40?"passed":"fail"
  
  return (
    <>
      <div className="card , bg-green-900 rounded-2xl  md:bg-yellow-600 text-black lg:bg-red-300">
        <h1>Card Component</h1    >

        <div>
          <img
            className="img"
            src={img}
            alt="image component"
          />
        </div>

        <div>chess board</div>

        <div>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </div>

        <div>abcdefghijkl</div>

        <div className="button">
          <button>  
            click me
          </button>
        <div className={marks>40 ? "text-green-600":"text-red-800"}>{b} </div>
        </div>

      </div>
    </>
  );
};

export default Card;