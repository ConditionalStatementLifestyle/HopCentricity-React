import React from 'react'
import { Radio } from 'semantic-ui-react'

const AudioToggle = (props) => <Radio id='radio' toggle checked={props.audio} onClick={() => props.toggleAudio()}/>

export default AudioToggle