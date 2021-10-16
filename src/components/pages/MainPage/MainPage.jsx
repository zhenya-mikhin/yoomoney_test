import React from 'react'
import Transfer from '../../blocks/Transfer/TransferComponent'
import CardsListComponent from '../../blocks/CardList/CardsListComponent'

const MainPage = () => {
	return (
		<>
			<CardsListComponent />

			<Transfer />
		</>
	)
}

export default MainPage