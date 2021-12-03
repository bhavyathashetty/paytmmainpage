import './App.css';
import React from 'react';
import Navigation from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

class App extends React.Component{

  render(){
    return(
      <div className="App">
        <Navigation/>
        <Home/>
        <Footer/>
      </div>
    )
  }
}

export default App;
