export const ActionType = {
	ADD_CARD: '/addCard'
}

export const ActionCreator = {
	addCard: (cardNumber) => ({
		action: ActionType.ADD_CARD,
		payload: cardNumber
	})
}

// Избыточная функциональность обусловлена возможным
// расширением приложения
