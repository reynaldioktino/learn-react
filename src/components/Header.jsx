import React from 'react'

class Header extends React.Component {
    //fungsi dalam class component render()
    render() {
        return (
            <div>
                <h1 className="warna">{ this.props.title }</h1>
                <p>{ this.props.desc }</p>
            </div>
        )
    }

}

export default Header