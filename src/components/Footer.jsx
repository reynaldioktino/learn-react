import React from 'react'

class Footer extends React.Component {
    //fungsi dalam class component render()
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }

}

export default Footer