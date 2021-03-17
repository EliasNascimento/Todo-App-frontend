import { combineReducers } from 'redux';

const rootReducer = combineReducers({

    todo: () => ({
        description: 'Ler Livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        },{
            _id: 2,
            description: 'Reunião com a equipe as 10h',
            done: false
        },
        {
            _id: 3,
            description: 'Consulta médica terça',
            done: false
        }]
    })

})

export default rootReducer