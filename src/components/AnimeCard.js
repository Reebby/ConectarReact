import React from 'react';
import { Link } from 'react-router-dom';
const AnimeCard =({anime}) => {
		return (
			<section>
			<Link to={{ pathname: `/anime/${anime._id}`, state: { id: anime.given_id } }}>
				<div id="card">
					<div class="inner">
						<div class="header">
							<i class="fa fa-info-circle" aria-hidden="true" />
							<h1>{anime.title}</h1>
							<div class="stars">
								<i class="fa fa-star" aria-hidden="true" />
								<i class="fa fa-star" aria-hidden="true" />
								<i class="fa fa-star" aria-hidden="true" />
								<i class="fa fa-star" aria-hidden="true" />
								<i class="fa fa-star-half" aria-hidden="true" />
							</div>
						</div>
					
					
					</div>
				</div>

				<div class="btn_row_next_prev" />
				</Link>
			</section>
		);
	}

export default AnimeCard;
