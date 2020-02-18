import React from 'react'
import PropType from 'prop-types'
import Styles from './Counter.module.css'

class Counter extends React.Component {
    state = {
        value: 2
    }

    render() {
        // CARA PERTAMA
        // let buttonDisabled = false;
        // if (this.state.value == 0){
        //     buttonDisabled = true
        // }

        // CARA KEDUA
        // let buttonDisabled = this.state.value === 0 ? true : false;

        // CARA KETIGA
        let buttonDisabled = false;
        buttonDisabled = this.props.value === 0 && true

        // Inline Style
        let labelStyle = {
            color: 'blue',
            marginRight: '10px',
            marginLeft: '10px',
            fontWeight: 'bold'

        }

        const { handleMinus, handlePlus, index } = this.props
        return (
            <div>
                <button disabled={buttonDisabled} onClick={() => handleMinus(this.props.index)}>-</button>
                <label style={labelStyle}> {this.props.value} </label>
                {/* <input value={this.props.initialValue} onChange = { () => null} /> */}
                <button onClick={() => handlePlus(index)}>+</button>
            </div>
        );
    }
}


Counter.PropType = {
    initialValue: PropType.number
}
export default Counter