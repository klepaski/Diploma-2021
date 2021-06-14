// import 'babel-polyfill' /* Support for IE11 */
import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from 'react-calendar-multiday'
import moment from 'moment'
import {omit} from 'ramda'
import './calendar.css'


const PositionDay = props => {
    let day = moment(props.date.moment).toDate();
    let endDate = new Date(props.endDate)

    let isFuture = false;
    if(day.getTime() > endDate.getTime()) {
        isFuture = true;
    }

    const onClick = (e) => {
        if (isFuture || props.isInThePast || !props.enabledAll || props.noEditable) {
            e.stopPropagation()
        }
    }


    return (
        <div onClick={onClick}
             className={getStyle(props)}
             style={getInline(isFuture ? {isInThePast: true} : props)}>
            {props.label}
        </div>)
}

const getStyle = function ({date, isSelected}) {
    return `${isSelected ? 'o_selected-day' : ''} ${date.type}-day`
}

const getInline = ({isToday, isInThePast}) => ({
    cursor: isInThePast ? 'not-allowed' : 'inherit',
    borderColor: 'rgb(228, 231, 231) !important',
    color: isInThePast ? 'rgb(202, 204, 205)' : 'inherit',
    background: isToday
        ? 'inherit'
        : isInThePast ? 'rgb(255, 255, 255)' : 'inherit'
})



export default class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            currentChannel: 0,
            channels: {},
            selectedDays: []
        }
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(prevProps.selectedDays.length == this.props.selectedDays.length) return
    //     this.setState({selectedDays: this.props.selectedDays})
    // }

    onReset = () => {
        this.setState({
            channels: {},
            currentChannel: 0
        })
    }

    reactToChange = obj => {
        if(this.props.enabledAll && this.props.setSelected) {
            this.props.setSelected(obj.selected)
        }
    }


    render () {
        if(!process.browser) return null;
        console.log('this.props.selectedDays', this.props.selectedDays)
        return (
            <div className={`z-calendar-wrapper ${this.props.enabledAll ? 'enabled-all' : 'disabled-all'}`}>
                <Calendar
                    isMultiple={true}
                    // reset={true}
                    selected={this.props.selectedDays}
                    onChange={this.reactToChange}
                    DayComponent={<PositionDay enabledAll={this.props.enabledAll} noEditable={this.props.noEditable} endDate={this.props.endDate} />}
                />
            </div>
        )
    }
}


