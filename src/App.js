import React, { useState } from 'react';
import OfferAndControlContainer from './Voting/OfferAndControlContainer';
import Context from './context';

function App() {
	const vote = {
		pro: 'pro',
		notChosen: 'notChosen',
		against: 'against',
	};

	let [error, setError] = useState({
		isError: false,
		message: '',
	});

	// let offer = {
	// 	id: 0,
	// 	vote: vote.notChosen,
	// 	imgSrc: null,
	// 	confirm: false,
	// 	title: '',
	// 	description: '',
	// };

	let [offersList, setOffersList] = useState([
		{
			id: 1,
			vote: vote.notChosen,
			imgSrc: null,
			confirm: false,
			title: 'Купить рабочую машину',
			description: 'Машина необходима для подвоза сотрудников.',
		},
		{
			id: 2,
			vote: vote.notChosen,
			imgSrc: null,
			confirm: false,
			title: 'Расширить штат тестировщиков',
			description:
				'С настоящей нагрузкой в офисе сотрудников-тестировщиков недостаточно для того, чтобы покрыть нужды. Предлагаю нанять в штат ещё 2-х новых сотрудников уровня junior.',
		},
		{
			id: 3,
			vote: vote.notChosen,
			imgSrc: null,
			confirm: false,
			title: 'Поднять зарплату разработчикам',
			description: '',
		},
	]);

	let [stateVotingSystem, setStateVotingSystem] = useState({
		votedForAll: false,
		onlyOneOffer: false,
	});

	let notAllConfirms = offersList.filter((offer) => !offer.confirm);

	let [indexCurrOffer, setCurrIndexOffer] = React.useState(0);

	function setVote(id = 0, value = '') {
		setOffersList(
			offersList.map((offer) => {
				if (offer.id === id) offer.vote = value;
				return offer;
			})
		);
	}
	function votedForAll(status = false) {
		setStateVotingSystem({ votedForAll: status });
	}

	function onlyOneOffer(status = false) {
		setStateVotingSystem({ onlyOneOffer: status });
	}

	function setConfirm(id = 0, value = false) {
		setOffersList(
			offersList.map((offer) => {
				if (offer.id === id) offer.confirm = value;
				return offer;
			})
		);

		if (notAllConfirms.length) {
			console.log('Ещё не все выбраны');
			votedForAll(false);
		} else {
			console.log('Все выбраны');
			votedForAll(true);
		}
	}

	function setNextIndexOffer() {
		if (indexCurrOffer < offersList.length - 1)
			setCurrIndexOffer(indexCurrOffer + 1);
	}

	function setPrevIndexOffer() {
		if (indexCurrOffer > 0) setCurrIndexOffer(indexCurrOffer - 1);
	}

	return (
		<Context.Provider
			value={{
				setVote,
				setConfirm,
				setNextIndexOffer,
				setPrevIndexOffer,
				votedForAll,
				onlyOneOffer,
				setError,
				vote,
				indexCurrOffer,
				stateVotingSystem,
				offersList,
				error,
			}}
		>
			<div className='wrapper'>
				<h1>Voting</h1>
				<OfferAndControlContainer />
			</div>
		</Context.Provider>
	);
}

export default App;
