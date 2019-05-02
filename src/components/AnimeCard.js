import React from 'react';

const AnimeCard =({anime}) => {
		return (
			<section>
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
			</section>
		);
	}

export default AnimeCard;
