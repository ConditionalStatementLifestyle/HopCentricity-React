import React from 'react'

const Slider = (props) => {

    const adjust = () => {
        let slider = document.getElementById('myRange')
        // let output = document.getElementById('rangeValue')
        let pos = slider.value
        props.adjust(pos)
    }

    return (
        <div className='ui form'><br></br>
            <div className="slidecontainer field centered">
                <label>Rating {parseFloat(props.position) -0.25}</label>
                <input onChange={adjust} value={props.position} step='0.25' type="range" min="1.25" max="5.25" className="slider centered" id="myRange"/>
                <output id="rangeValue"></output>
            </div>
        </div>
    )
}

export default Slider