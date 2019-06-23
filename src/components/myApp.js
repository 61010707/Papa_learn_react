import React from "react";
class MyApp extends React.Component {
  Greeting() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return <h1>Good {timeOfDay} to you,sir or madam!</h1>;
  }

  Header(props) {
    return <header>Welcome, {props.username}</header>;
  }
  render() {
    return (
      <div>
        <this.Header username="DrZIn" />
        <this.Greeting />
      </div>
    );
  }
}
export default MyApp;
