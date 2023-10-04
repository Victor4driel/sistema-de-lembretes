import React from "react";

import PageHeader from "../common/template/pageHeader";
import ReminderForm from "./reminderForm";
import ReminderList from "./reminderList";

export default props => {
    return (
        <div>
            <PageHeader name='Cadastrar' small='Lembretes' />
            <ReminderForm />
            <PageHeader name='Lista' small='Lembretes' />
            <ReminderList />
        </div>
    )
}