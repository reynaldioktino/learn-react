import React from "react";
import styled from "styled-components";

export default class TextInput extends React.Component {
  state = {
    isFocus: false,
    value: ""
  };

  onFocusChange(isFocus) {
    this.setState({
      isFocus: isFocus
    });
  }

  onValueChange(value) {
    this.setState({
      value: value
    });
  }

  //   onChangeState(name, value) {
  //     const newState = this.state;
  //     newState[name] = value;
  //     this.setState(newState);
  //   }

  //fungsi dalam class component render()
  render() {
    console.log("is focus: " + this.state.isFocus);
    return (
      <div>
        {/* <div>is focus : {this.state.isFocus ? "focus" : "unfocus"}</div>
        <div>is focus : {JSON.stringify(this.state.isFocus)}</div>
        <div>value : {this.state.value}</div> */}
        {/* <label style={styles.label}>{this.props.label}</label> */}
        <Label>{this.props.label}</Label>
        <Input
          //   style={styles.input}
          type="text"
          placeholder={this.props.placeholder}
          onFocus={() => this.onFocusChange(true)}
          onBlur={() => this.onFocusChange(false)}
          onChange={event => this.onValueChange(event.target.value)}
          //   onFocus={() => this.onChangeState("isFocus", true)}
          //   onBlur={() => this.onChangeState("isFocus", false)}
          //   onChange={event => this.onChangeState("value", event.target.value)}
          value={this.state.value}
        />
      </div>
    );
  }
}

// const styles = {
//   input: {
//     padding: 10,
//     borderRadius: 5,
//     borderStyle: "solid"
//   },

//   label: {
//     marginRight: 15
//   }
// };

const Label = styled.label`
  margin-right: 15px;
  color: red;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5;
`;
