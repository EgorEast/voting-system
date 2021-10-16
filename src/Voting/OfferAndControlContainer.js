import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import Offer from './Offer';
import ControlButtons from '../ControlButtons';
import Context from '../context';

function OfferAndControlContainer() {
	let {
		indexCurrOffer,
		offersList,
		setConfirm,
		setNextIndexOffer,
		setPrevIndexOffer,
		setVote,
		vote,
	} = useContext(Context);

	let offer = offersList[indexCurrOffer];

	function isConfirmVariant() {
		if (offer.confirm) return true;
		else return false;
	}

	return [
		<div className='offer' key='offer'>
			<Offer
				offer={offer}
				imgSrc={offer.imgSrc}
				key={offer.id}
				index={offer.id}
				disabledRadio={isConfirmVariant()}
				setVote={setVote}
				vote={vote}
			/>
		</div>,
		<ControlButtons
			key='controlButtons'
			className='control-buttons'
			indexCurr={indexCurrOffer}
			list={offersList}
			setConfirm={setConfirm}
			setNextIndex={setNextIndexOffer}
			setPrevIndex={setPrevIndexOffer}
			vote={vote}
		/>,
	];
}
// OfferAndControlContainer.propTypes = {
// 	offersList: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
export default OfferAndControlContainer;
