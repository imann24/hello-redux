import React from 'react'
import { connect } from 'react-redux'
import { added, reset } from './store'
const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

const App = ({ value, dispatch }) => {
    const dispatchAdd = () => {
        const value = document.getElementById('to-add').value
        dispatch(added(parseInt(value)))
    }

    const dispatchReset = () => {
        dispatch(reset())
    }

    return (
        <div id="container">
            <h1>Adder</h1>
            <div>
                <label><b>To Add: </b></label>
                <input type="number" id="to-add"></input>
                <button onClick={dispatchAdd}>Add</button>
                <button onClick={dispatchReset}>Reset</button>
            </div>
            <br />
            <div>
                <label><b>Total: </b>{value}</label>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(App)
