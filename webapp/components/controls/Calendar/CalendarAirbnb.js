import React, {useContext} from 'react'
// import Calendar from 'react-calendar-multiday'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment'
import './calendar.css'
import 'react-dates/lib/css/_datepicker.css';
import {MainContext} from "../../contextProviders/MainContext";


export default class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null
        }
    }

    componentDidMount() {
        console.log(this.props.calendar)
        console.log(this.props.endDateOffer)
        console.log(this.props.userId)
    }

    onDatesChange = (startDate, endDate) => {
        // this.setState({ startDate, endDate })
        this.props.onChangeDates({
            startDate: moment(startDate).toDate(),
            endDate: moment(endDate).toDate()
        })
    }

    isSameDay = (d1, d2) => {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }

    isDisabledDay = (mDay) => {
        let isDisable = false
        this.props.calendar.map((item, key) => {
            if(item.status == 'disabled' ||
                (item.status == 'reserved' && this.props.userId != item.clientId)
            ) {
                if(this.isSameDay(mDay, moment(item.date).toDate())) {
                    isDisable = true
                }
            }
        })
        return isDisable;
    }

    isDayReservedByMe = day => {
        let mDay = moment(day).toDate()
        let isReserved = false
        this.props.calendar.map((item, key) => {
            if(item.status == 'reserved' && this.props.userId == item.clientId) {
                if(this.isSameDay(mDay, moment(item.date).toDate())) {
                    isReserved = true
                }
            }
        })
        return isReserved;
    }

    isOutsideRange = day => {
        const todayDate = moment().toDate()
        let mDay = moment(day).toDate()
        let endDate = moment(this.props.endDateOffer).toDate()
        if(this.isSameDay(new Date(todayDate), new Date(mDay))) {
            return false
        }
        if(mDay < todayDate || mDay > endDate) {
            return true
        }
        if(this.isDisabledDay(mDay)){
            return true
        }
        return false
    }


    isDayBlocked = day => {
        // const todayDate = moment().toDate()
        // let mDay = moment(day).toDate()
        // let endDate = moment(this.props.endDate).toDate()
        //
        // if(mDay < endDate) {
        //     return true
        // }
        return false
    }



    render () {
        if(!process.browser) return null;

        let campaignStartDate = '23/10/2019';
        let campaignEndDate= '29/10/2019';


        let startDate = this.props.bookingDates.startDate ? moment(this.props.bookingDates.startDate) : null,
            endDate = this.props.bookingDates.endDate ? moment(this.props.bookingDates.endDate) : null



        return (
            <div className='z-wrapper-airnb-calendar'>
                <DateRangePicker
                    startDate={startDate} // momentPropTypes.momentObj or null,
                    endDate={endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={({ startDate, endDate }) => this.onDatesChange(startDate, endDate )}
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    minimumNights={0}
                    isOutsideRange={(date) => this.isOutsideRange(date)}
                    isDayBlocked={(date) => this.isDayBlocked(date)}
                    isDayHighlighted={date => this.isDayReservedByMe(date)}
                    enableOutsideDays={true}
                    displayFormat={() => "DD/MM/YYYY"}
                />
            </div>
        )
    }
}


