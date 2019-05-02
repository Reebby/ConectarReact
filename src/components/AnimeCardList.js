import React from 'react';
import AnimeCard from './AnimeCard';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class AnimeCardList extends React.Component {
	constructor() {
		super();
		this.state = {
			animes: [],
			searchfield: ''
		};
	}

	componentDidMount() {
		const proxyurl = 'https://cors-anywhere.herokuapp.com/';
		const url = 'https://notmyanimelist.herokuapp.com/animes'; // site that doesn’t send Access-Control-*
		fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
			.then(response => response.json())
			.then(movies => {
				this.setState({ animes: movies });
			})
			.catch(() => console.log('Can’t access ' + url + ' response. Blocked by browser?'));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	  }

	render() {
		const settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 2,
			slidesToScroll: 2,
			initialSlide: 0,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};

		const { animes, searchfield } = this.state;
		const filteredAnimes = animes.filter(data =>{
			return data.title.toLowerCase().includes(searchfield.toLowerCase());
		  })
		return !animes.length ? (
			<h1>Loading</h1>
		) : (
			<div style={{ padding: '40px'}}>
				<SearchBar searchChange = {this.onSearchChange} />
				<h5 className="headerText"> Animes 2019</h5>

				<Slider {...settings}>
					{filteredAnimes.map((anime, i) => (
						<Link to={{ pathname: `/anime/${anime._id}`, state: { id: anime.given_id } }}>
							<AnimeCard style={{ marginLeft: '40px', marginRight: '40px' }} anime={anime} />
						</Link>
					))}
				</Slider>
			</div>
		);
	}
}

export default AnimeCardList;
