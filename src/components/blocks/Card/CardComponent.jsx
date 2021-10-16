import React from 'react'
import { Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	card: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',

		width: 300,
		height: 200,
		padding: '20px',
		borderRadius: '15px',
		backgroundColor: '#000000',

		'&:after': {
			content: '',
			position: 'absolute',
			top: '25px',
			right: '25px',
			width: '16px',
			height: '16px',
			borderRidius: '16px',
			color: '#F79E1B'
		}
	},
	number: {
		fontSize: 16,
		letterSpacing: 2,
		color: '#FFFFFF',
		opacity: '0.6'
	}
  });

const CardComponent = ({cardNumber}) => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<Typography className={classes.number}  variant="body1">{cardNumber}</Typography>
		</Card>
	)
}

export default CardComponent