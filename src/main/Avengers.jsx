import React, {Component} from "react"
import './Avengers.css'

export default class Avengers extends Component {
    render() {
        return(
            <div className='avengers'>
                <h1 className='avengers_title'> Avengers: Infinity War </h1>
                <p className='avengers_subtitle' > 85% </p>
                <p className='avengers_subtitles' > 156 minutes </p>
                <text className='text'>An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time. The Avengers and their Super Hero allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.</text>
            </div>
            
        )
    }
}