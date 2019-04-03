import React from 'react'

class Button extends React.Component {
    //fungsi dalam class component render()
    //arrow function
    showMessage = () => {
        alert(this.props.message)
    }

    render() {
        return <button className="btn-warna" onClick={ this.showMessage }>Simpaaan</button>
    }

}

export default Button