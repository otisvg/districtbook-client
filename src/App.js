import React from 'react';
import './App.css'
import NavBar from './components/NavBar';
import PostFeed from './PostFeed';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <NavBar />
     
      <header className="App-header">
        <h1>DistrictBook</h1>
        <hr />
      </header>
      <body className="App-body">
        <PostFeed />
        <UserForm />
      </body>
    </div>
  )
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
