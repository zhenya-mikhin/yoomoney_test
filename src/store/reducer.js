import {ActionType} from './action'

const initialState = {
	cardsList: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.ADD_CARD:
			return {
				...state,
				cardsList: state.cardsList.push(action.payload)
			}
		
		default:
			return state
	}
}

export default reducer