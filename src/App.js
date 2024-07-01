import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Chris Ebuka',
        bio: 'A passionate software developer.',
        imgSrc: 'https://bulk.ly/wp-content/uploads/2022/10/Social-media-for-Software-developers-1024x536.png.webp',
        profession: 'Software Engineer'
      },
      shows: false,
      timeInterval: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState(prevState => ({
      shows: !prevState.shows,
      timeInterval: 0 // Reset the time interval when toggling
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide' : 'Show'} Profile
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.profession}</h2>
          </div>
        )}
        <p>Time since component mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
