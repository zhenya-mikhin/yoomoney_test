import React from 'react'

import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core/styles';

const BootstrapButton = withStyles({
	root: {
		marginTop: '30px',
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: 12,
		fontWeight: 300,
		padding: '6px 12px',
		lineHeight: 1.5,
		backgroundColor: '#8B3FFD',
		fontFamily: 'Roboto',

		'&:hover': {
			backgroundColor: '#8B3FDF',
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: '#8B3FDF',
		},
		'&:focus': {
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
	 	},
	},
})(Button);

const ButtonComponent = ({textBtn, typeBtn = 'default', disabled = false}) => {
	return (
		<BootstrapButton
			variant="contained"
			color="primary"
			disabled={disabled}
			type={typeBtn}
		>
			{textBtn}
		</BootstrapButton>
	)
}

export default ButtonComponent