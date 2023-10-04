import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Button from "../common/template/button"

import { changeName, changeDate, refresh, add } from "./reminderActions";

import './ReminderForm.css'

class ReminderForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentDidMount() {
        this.props.refresh()
    }
   
    keyHandler(e) {
        const { add, date, name } = this.props
        if(e.key === 'Enter') {
            add(date, name)
        }
    }

    render() {
        const { changeName, changeDate, add, date, name } = this.props
        return (
            <div role="form" className="reminderForm">
                <div className="inputs">
    
                    <div className="inputBox">
                        <input id="reminderInput"
                            type="text"
                            required="required"
                            value={name}
                            onChange={changeName}
                        />
                        <span>Adicionar Lembrete</span>
                    </div>
    
                    <div className="inputBox">
                        <input
                            id="DateInput"
                            type="date"
                            required="required"
                            value={date}
                            onChange={changeDate}
                        />
                    </div>
                </div>
    
                <div className="btnBox">
                    <Button 
                        backgroundColor='#007bff'
                        color='white'
                        width='100%'
                        height='45px'
                        onClick={() => add(name, date)}>Adicionar</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ name: state.reminder.name,  date: state.reminder.date})
const mapDispatchToProps = dispatch => 
bindActionCreators({ changeName, changeDate, refresh, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReminderForm)