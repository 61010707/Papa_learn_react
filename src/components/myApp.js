import React from "react";

// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIN: false
//     };
//   }

//   handleClick() {
//     console.log("i was click");
//   }
//   render() {
//     return (
//       <div>
//         <h1>your are current logged {this.state.isLoggedIN ? "in" : "out"}</h1>
//         <div>
//           <img
//             onMouseOver={() => console.log("hover me")}
//             src="https://fillmurray.com/200/100"
//             alt="test img"
//           />
//           <br />
//           <br />
//           <button
//             onClick={() => {
//               console.log("i was click");
//             }}
//           >
//             Clike me!!
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  render() {
    return (
      <div className="product-list">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>change</button>
      </div>
    );
  }
}
export default MyApp;
