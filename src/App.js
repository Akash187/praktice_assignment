import React from "react";
import Picker from "react-mobile-picker";

class App extends React.Component {
  state = {
    data: {},
    valueGroups: {
      title: "Mr.",
      firstName: "Micheal",
      secondName: "Jordan"
    },
    optionGroups: {
      title: ["Mr.", "Mrs.", "Ms.", "Dr."],
      firstName: ["John", "Micheal", "Elizabeth"],
      secondName: ["Lennon", "Jackson", "Jordan", "Legend", "Taylor"]
    }
  };

  componentDidMount(){
    fetch('./data.json').then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
      // Work with JSON data here
      this.setState({data});
    }).catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
  }

  // Update the value in response to user picking event
  handleChange = (name, value) => {
    this.setState(({ valueGroups }) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));
  };

  render() {
    const {data, optionGroups, valueGroups } = this.state;

    return (
      <div>
        <h2 style={{textAlign: "center"}}>{data.title}</h2>
        <Picker
          optionGroups={optionGroups}
          valueGroups={valueGroups}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
