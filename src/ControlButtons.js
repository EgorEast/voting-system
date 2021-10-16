import React from 'react';

function ControlButtons({
	indexCurr = 0,
	list = [],
	setConfirm = () => {},
	setNextIndex = () => {},
	setPrevIndex = () => {},
	vote = {},
}) {
	function isSelectedVariant() {
		if (offer.vote === vote.notChosen) return true;
		else return false;
	}

	let offer = list[indexCurr];
	return (
		<div className='control-buttons'>
			<button
				key={`PrevOfferButton`}
				className='prev-offer'
				onClick={() => {
					setPrevIndex();
				}}
			>
				Prev offer
			</button>
			<button
				key={`ConfirmButton`}
				className='confirm'
				disabled={isSelectedVariant()}
				onClick={() => {
					if (offer.vote !== vote.notChosen) setConfirm(offer.id, true);
				}}
			>
				Confirm
			</button>
			<button
				key={`NextOfferButton`}
				className='next-offer'
				onClick={() => {
					setNextIndex();
				}}
			>
				Next offer
			</button>
		</div>
	);
}
export default ControlButtons;
