import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Button from "../common/template/button"
import If from "../common/operator/If";

import { remove } from "./reminderActions";

import './ReminderList.css'

const ReminderList = props => {
    const groupedReminders = props.groupedReminder

    const formatDate = inputdata => {
        const data = new Date(inputdata)
        const formattedDate = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`

        return formattedDate
    }

    const renderRows = () => {
        return (
            <div className="list">
                {Object.keys(groupedReminders).sort().map(date => (

                    <div key={date} className="groupedList">
                        <div>
                            <span className="date">{formatDate(date)}</span>

                            <ul className="remindersList">
                                {groupedReminders[date].map((reminder, index) => (
                                    <li key={index}>
                                        {reminder.nome}
                                        <Button
                                            backgroundColor='red'
                                            width='30px'
                                            height='30px'
                                            onClick={() => props.remove(reminder)}>
                                            <i className="fa fa-trash"></i>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                <If test={Object.keys(groupedReminders).length == 0}>
                    <span>*Lista Vazia</span>
                </If>
            </div>
        );
    }


    return (
        <div>
            {renderRows()}
        </div>
    )
}

const mapStateToProps = state => ({ groupedReminder: state.reminder.groupedReminder })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReminderList)