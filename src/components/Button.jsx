import React from "react";

class Button extends React.Component {
  //fungsi dalam class component render()
  //arrow function
  showMessage = () => {
    alert(this.props.message);
  };

  render() {
    return (
      <div>
        <button className="btn-warna" onClick={this.showMessage}>
          Coba Alert
        </button>
      </div>
    );
  }
}

export default Button;
