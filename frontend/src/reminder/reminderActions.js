import axios from "axios"

const URL = 'https://localhost:7231/api/v1/Lembrete'

export const changeName = event => ({
    type: 'NAME_CHANGED',
    payload: event.target.value
})

export const changeDate = event => ({
    type: 'DATE_CHANGED',
    payload: event.target.value
})

export const refresh = () => {
    const request = axios.get(URL)

    return {
        type: 'REFRESHED',
        payload: request
    }
}

export const add = (name, date) => {

    if (name && date) {
        let newDate = new Date(date)
        newDate.setDate(newDate.getDate() + 1)

        if (newDate >= new Date()) {
            return dispatch => {
                axios.post(URL, { nome: name, data: date })
                    .then(resp => dispatch({
                        type: 'REMINDER_ADDED'
                    }))
                    .then(resp => dispatch(refresh()))
            }
        } else {
            alert('A data deve estar no futuro');
        }
    } else {
        alert('Preencha todos os campos');
    }
}

export const remove = reminder => {
    return dispatch => {
        axios.delete(`${URL}/${reminder.id}`)
            .then(resp => dispatch(refresh()))
    }
}