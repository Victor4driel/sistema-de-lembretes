const INITIAL_STATE = {
    groupedReminder:[],
    name: '',
    date: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload }
        case 'DATE_CHANGED':
            return { ...state, date: action.payload }
        case 'REFRESHED':
            const reminders = action.payload.data
            const groupedReminderDate = {}

            reminders.forEach(reminder => {
                const date = reminder.data;
                if (!groupedReminderDate[date]) {
                    groupedReminderDate[date] = [];
                }
                groupedReminderDate[date].push(reminder);
            });
            return { ...state, groupedReminder: groupedReminderDate }
        case 'REMINDER_ADDED':

            return { ...state, name: '', date: ''}
        default:
            return state
    }
}