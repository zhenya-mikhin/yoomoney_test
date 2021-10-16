import React from 'react'
import ButtonComponent from '../../blocks/Button/Button'
import {Typography, TextField} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {makeStyles, withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	formControl: {
		minWidth: '300px',
	},
	select: {
		borderRadius: 4,
		position: 'relative',
		border: '2px solid #D9D9D9',
		fontSize: 16,
		'&:focus': {
			borderRadius: 4,
			borderColor: '#8B3FFD',
		},
	},
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

const Transfer = () => {
	const classes = useStyles();

	return (
		<>
			<Typography variant="h3">
				Перевод на кошелёк
			</Typography>

			<FormControl className={classes.formControl}>
				<InputLabel id="seletc-for">Куда перевести</InputLabel>
				<CustomTextField
					id="select-for"
					variant="outlined"
					required
					select
				>

				</CustomTextField>
			</FormControl>

			<FormControl className={classes.formControl}>
				<InputLabel id="input">Сколько</InputLabel>
				<CustomTextField
					id="input"
					variant="outlined"
					fullWidth
					required
				/>
			</FormControl>

			<FormControl className={classes.formControl}>
				<InputLabel id="select-from">Откуда</InputLabel>
				<CustomTextField
					id="input-from"
					variant="outlined"
					required
					select
				>

				</CustomTextField>
			</FormControl>

			<ButtonComponent textBtn={'Сделать перевод'} />
		</>
	)
}

export default Transfer