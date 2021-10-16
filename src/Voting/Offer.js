import React from 'react';
import PropTypes from 'prop-types';

function Offer({
	offer = {},
	index = -1,
	imgSrc = '',
	disabledRadio = false,
	setVote = () => {},
	vote = {},
}) {
	const classes = [];
	if (offer.vote === vote.pro) classes.push('pro-offer');
	else if (offer.vote === vote.against) classes.push('against-offer');
	return (
		<div className={classes.join(' ')}>
			<div className='offer-inform'>
				<img src={imgSrc} alt='' />
				<h2>
					<strong>{index}-st </strong>
					{offer.title}
				</h2>
				<div className='offer-description'>{offer.description}</div>
			</div>
			<div className='variants'>
				<input
					type='radio'
					name='variant'
					id='variants'
					disabled={disabledRadio}
					onChange={() => setVote(offer.id, vote.pro)}
				/>
				Pro
				<input
					type='radio'
					name='variant'
					id='variants'
					disabled={disabledRadio}
					onChange={() => setVote(offer.id, vote.against)}
				/>
				Against
			</div>
		</div>
	);
}
Offer.propTypes = {
	offer: PropTypes.object.isRequired,
	index: PropTypes.number,
};
export default Offer;
