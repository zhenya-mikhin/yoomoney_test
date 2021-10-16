import React from 'react'
import {Link} from 'react-router-dom'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import CheckIcon from '@material-ui/icons/Check'

const useStyles = makeStyles((theme) => ({
  	root: {
    	display: 'flex',
    	flexWrap: 'wrap',
  	},
  	margin: {
    	margin: theme.spacing(1),
	},
	circle: {
		display: 'block',
		position: 'relative',
		width: '80px',
		height: '80px',
		border: '4px solid #009957',
		borderRadius: '42px'
	},
	check: {
		position: 'absolute',
		top: '19px',
		left: '21px'
	}
}));

const SuccessPage = () => {
	const classes = useStyles()

	return (
		<>
			<Typography variant="h3" >Привязка банковской карты</Typography>

			<span className={classes.circle}>
				<CheckIcon
					className={classes.check}
					style={{ color: 'green', fontSize: 40 }}/>
			</span>

			<Typography variant="h4">Всё получилось</Typography>
			<Typography variant="body2" >
				Через минуту ваша карта появится в кошельке - 
				вы увидите ее в разделе «Банковские карты»
			</Typography>

			<Link to={'/'}>
				Обратно к картам
			</Link>
		</>
	)
}

export default SuccessPage