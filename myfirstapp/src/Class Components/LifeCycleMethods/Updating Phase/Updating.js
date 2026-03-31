// import React, { Component } from "react";

// class Updating extends Component {
//   constructor() {
//     super();
//     this.state={
//       count: 1,
//     };
//   }
//   componentDidUpdate(prevProps,prevState){
//     // console.log(prevState.count,"Previous State")
//     // console.log(this.state.count,"Current State")
//     if(prevState.count!==this.state.count){
//       console.log(`Count Value Updated by ${this.state.count} `)
//     }
//   }

//   shouldComponentUpdate(nextProps,nextState){
//     if(this.state.count>=10){
//       return false
//     }
//     else{
//       return true
//     }
//   }

//   getSnapshotBeforeUpdate(prevProps,prevState){
//     console.log(prevState,"Snapshot")
//     return null
//   }
//   Increment=()=>{
//     this.setState({count:this.state.count+1})
//   }
//   Decrement=()=>{
//     this.setState({count:this.state.count-1})
//   }

//   render() {
//     // const {count,city,State}=this.state
//     const {count} = this.state
//     return (
//       <div>
//         {/* <h1>{count}{city}{State}</h1> */}
//         {/* <h1>{this.state.count}</h1> */}
//         <center><h1>{count}</h1>
//         <button onClick={this.Increment}>Increment</button>
//         <button onClick={this.Decrement} disabled={count<1}>Decrement</button></center>
//       </div>
//     );
//   }
// }

// export default Updating;


// import React, { Component } from "react";
// import axios from "axios";
// import ProfileCard from "../../../Day-6/Profile/ProfileCard";
// import Loader from "../Spinner/spinner";

// class Updating extends Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       count: 0,
//       product:null
//     };
//   }
//   componentDidUpdate(prevProps,prevState){
//     axios.get(`https://fakestoreapi.com/products/${this.state.count}`).then((res)=>this.setState({product:res.data}))
//   }

//   shouldComponentUpdate(nextProps,nextState){
//     if(this.state.count>=10){
//       return false
//     }
//     else{
//       return true
//     }
//   }

//   getSnapshotBeforeUpdate(prevProps,prevState){
//     console.log(prevState,"Snapshot")
//     return null
//   }
//   Increment=()=>{
//     this.setState({count:this.state.count+1})
//   }
//   Decrement=()=>{
//     this.setState({count:this.state.count-1})
//   }

//   render() {
//     const {count,product} = this.state
//     return (
//       <div>
//         <center><h1>{count}</h1>
//         <button onClick={this.Increment}>Increment</button>
//         <button onClick={this.Decrement} disabled={count<1}>Decrement</button></center>
//         <center>{product?(<p><ProfileCard title={product.title} image={product.image} description={product.description} category={product.category}/></p>):(<Loader/>)}</center>
//       </div>
//     );
//   }
// }

// export default Updating;
