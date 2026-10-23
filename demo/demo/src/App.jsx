// import Product from "./Product";
// import Card from "./Card";
// import Events from "./Eventss";

// import Effects from "./effects.jsx";

// function App() {
//   return <Effects />;
// }

// export default App;
// contexts is use for avoiding props drilling and to share data between components without passing props down manually at every level. It allows you to create a global state that can be accessed by any component in the component tree.
import Contexts from "./Contexts.jsx";

function App() {
  return <Contexts />;
}

export default App;


// export default App;



// const App = () => {
//   const a = 10;

//   let toggle = true;
//   let prodt;

  
//   const arr = [
//     {
//       title: "Card Component",
//       img: "https://plus.unsplash.com/premium_photo-1670183859029-99a0a2c1912b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlc3N8ZW58MHx8MHx8fDA%3D",
//       desc: ``,          
//     },
//     {
//       title: "Card Component1",
//       img: "https://img.magnific.com/free-vector/chess-game-concept-with-realistic-board-black-white-pieces_1284-13711.jpg?semt=ais_hybrid&w=740&q=80",
//       desc: ``,
//     },
//     {
//       title: "Card Component2",
//       img: "https://m.media-amazon.com/images/I/71UBr0lwOvL.jpg",
//       desc: ``,
//     },
//   ];

  // return (
    <>
      {/* <div className="main flex gap-3">

        <Card title={arr[0].title} img={arr[0].img} desc={arr[0].desc} />
        <Card title={arr[1].title} img={arr[1].img} desc={arr[1].desc} />
        <Card title={arr[2].title} img={arr[2].img} desc={arr[2].desc} /> */}

      {/* </div> */}

      {/* <h1>Product Page</h1> */}
      {/* <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>{a}</h1>
      {
       toggle?
    prodt = <>
      <Product name="Hp" Price={30} />
      < Product name="vivo" Price={60} />
      <Product name="oppo" Price={60} />
    </>
  :
    prodt = <>
      <Product name="apple" Price={60} />
      <Product name="samsung" Price={60} />
    </>

      // {prodt}
//       } */}
//     </>
//   );
// };

// export default Events;