import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AnimeCardDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			anime: [],
		};

		//Fetching all animes

		const proxyurl = 'https://cors-anywhere.herokuapp.com/';
		const url = `https://notmyanimelist.herokuapp.com/anime/${this.props.location.state.id}`; // site that doesn’t send Access-Control-*
		fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
			.then(response => response.json())
			.then(data => {
				data.map(data1 => {
					return this.setState({
						anime: data1,
					});
				});
			})

			.catch(() => console.log('Can’t access ' + url + ' response. Blocked by browser?'));

		//Fetching all characters
		
		const url2 = `https://notmyanimelist.herokuapp.com/character/${this.props.location.state.id}`; // site that doesn’t send Access-Control-*
		fetch(proxyurl + url2) // https://cors-anywhere.herokuapp.com/https://example.com
			.then(response => response.json())
			.then(data => {
				data.map(data1 => {
				return this.setState({
						character: data1,
					});
				});
			})

			.catch(() => console.log('Can’t access ' + url + ' response. Blocked by browser?'));
	}

	render() {
		const { anime, character } = this.state;
		console.log(anime);
		console.log(character)
		return (
			<div style={{ color: '#fff' }}>
				<div class="movie-card">
					<Link to="/">
						<h4 className="back">Back</h4>
					</Link>

					<div class="container">
					
							<img
								src={!character ? '' :character.img.src}
								alt="cover"
								class="cover"
							/>
						

						<div class="hero">
							<div class="details">
								<div class="title1">{anime.title}</div>

								<div class="title2">{anime.title}</div>
							</div>
						</div>

						<div class="description">
							<div class="column1">
							<h4> Genres</h4>
								{!anime.genres ? '' : anime.genres.map(data => <span class="tag">{data}</span>)}
							</div>

							<div class="column2">
								<p>{anime.synopsis}</p>

								<div class="avatars">
								{
									!character
									? <p>*No characters found for this anime*</p>
									: <div>
										<img
											src={character.img.src}
											alt="character"
										/>
										<p> {character.name}</p>
									</div>
								}
										
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AnimeCardDetails;
