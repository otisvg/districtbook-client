import React from 'react';
import './App.css'
import Header from "./Header";
import Left from "./left"
import Middle from "./Middle"
// import index from "./index"
// import NavBar from './NavBar';
// import PostFeed from './PostFeed';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="facebook">
        <Left />
        <Middle />
      </div>
    </div>
  );
}

export default App;


// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     }
//   }

//   componentDidMount() {
//     fetch('http://localhost:3000/api/v1/posts')
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           isLoaded: true,
//           items: json,
//       })
//     });
//   }

//   render() {
//     return [
//       <NavBar />,
//       <PostForm />,
//       <PostFeed />
//     ]
//   }
// } 
// export default App;

// <div className="App">
//       <NavBar />
//       <header className="App-header">
//         <h1>DistrictBook</h1>
//         <hr />
//       </header>
//       <body className="App-body">
//         <PostFeed />
//       </body>
//     </div>
