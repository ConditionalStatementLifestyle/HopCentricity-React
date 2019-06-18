import React from 'react'

const Slider = (props) => {

    const adjust = () => {
        let slider = document.getElementById('myRange')
        let pos = slider.value
        props.adjust(pos)
    }

    return (
        <div className='ui form'><br></br>
            <div className="slidecontainer field centered">
                <label>Rating {props.position}</label>
                <input onChange={adjust} value={props.position} step='0.25' type="range" min="1" max="5.0" className="slider centered" id="myRange"/>
                <output id="rangeValue"></output>
            </div>
        </div>
    )
}

export default Slider