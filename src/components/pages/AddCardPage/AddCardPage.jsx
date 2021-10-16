import React, {useRef} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { ActionCreator } from '../../../store/action'

import {Typography, TextField, FormHelperText} from '@material-ui/core';
import {withStyles, makeStyles} from '@material-ui/core/styles';

import ButtonComponent from '../../blocks/Button/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		margin: theme.spacing(1),
	},
	txt: {
		display: 'flex',
		justifyContent: 'end',
		width: '60px'
	}
}));

const CustomTextField = withStyles({
  	root: {
    	'& input + fieldset': {
      		borderColor: '#D9D9D9',
      		borderWidth: 2,
		},
		'& input:hover + fieldset': {
			borderColor: 'grey',
      		padding: '4px !important',
    	},
    	'& input:focus + fieldset': {
			borderColor: '#8B3FFD',
      		padding: '4px !important',
    	},
  	},
})(TextField);

const formStyle = {
	width: '300px',
	border: '1px solid #eee',
	borderRadius: '5px'
}

const AddCard = ({dispatchCard}) => {
	const classes = useStyles()

	const cardNumberRef = useRef()
	const someNubmerRef = useRef()

	const handleSubmit = evt => {
		evt.preventDeafault()

		dispatchCard({
			cardNumber: cardNumberRef.target.value
		})
	}

	return (
		<>
			<Typography variant="h3" >Привязка банковской карты</Typography>

			<form style={formStyle} noValidate onSubmit={handleSubmit}>
				<CustomTextField
					className={classes.margin}
        			variant="outlined"
        			placeholder="Номер карты"
					fullWidth
        			required
					ref={cardNumberRef}
      			/>

				<CustomTextField
					style={{width: '80px'}}
					className={classes.margin}
        			variant="outlined"
        			placeholder="ММ/ГГ"
        			required
					ref={someNubmerRef}
      			/>

				<FormHelperText className={classes.txt}>
					Три цифры на обороте
				</FormHelperText>
				<CustomTextField
					style={{width: '70px'}}
					className={classes.margin}
        			variant="outlined"
        			placeholder="CVC"
					type="password"
					maxRows="3"
        			required
					ref={someNubmerRef}
      			/>

				<ButtonComponent
					textBtn={'Отменить'}
					variant={'contained'}
					type={'reset'}
				/>
				<Link to="/">
					<ButtonComponent textBtn={'Продолжить'} />
				</Link>
			</form>
		</>
	)
}

const mapDispatchToProps = dispatch => ({
	dispatchCard(number) {
		dispatch(ActionCreator.addCard(number))
	}
})

export default connect(null, mapDispatchToProps)(AddCard)