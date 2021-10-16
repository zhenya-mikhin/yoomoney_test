import React from 'react'
import {connect} from 'react-redux'

import ButtonComponent from '../Button/Button.jsx'
import Card from '../Card/CardComponent.jsx'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'


const CardsListComponent = ({cardsList}) => {

	return (
		<>
			<Box style={{ display: 'flex', flexWrap: 'wrap', gap: '40px',}}>
				{cardsList.map(item => <Card cardNumber={item.cardNumber} />)}
			</Box>

			<div>
				{cardsList}
			</div>
			{
				cardsList.length > 0 
					? <Link to="/add"><ButtonComponent textBtn={'Привязать ещё одну'} /></Link>
					: <Link to="/add"><ButtonComponent textBtn={'Привязать карту'} /></Link>
			}
		</>
	)
}

const mapStateToProps = (state) => ({
	cardsList: state.cardsList
})

export default connect(mapStateToProps, null)(CardsListComponent)