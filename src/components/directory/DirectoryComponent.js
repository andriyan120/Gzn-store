import React from 'react';

import MenuItem from '../menu-item/MenuItem';

import './DirectoryComponent.scss';

class Directory extends React.Component {
	constructor() {
		super()
		this.state = {
			sections: [
				{
					title: 'hats',
					imageUrl: 'https://i.pinimg.com/originals/83/84/bf/8384bfa3ba023c2663baddbf15fee6c9.jpg',
					id: 1
				},
				{
					title: 'jackets',
					imageUrl: 'https://the-casual.com/42-large_default/jean-jacket-with-a-hood.jpg',
					id: 2
				},
				{
					title: 'sneakers',
					imageUrl: 'https://the-casual.com/865-large_default/casual-leather-shoes.jpg',
					id: 3
				},
				{
					title: 'womens',
					imageUrl: 'https://data.whicdn.com/images/320490265/original.jpg',
					id: 4
				},
				{
					title: 'mens',
					imageUrl: 'https://i.imgur.com/LJ5xgCn.jpg',
					id: 5
				}
			]
		}
	}


	render() {
		return (
		<div className='directory-menu'>
			{this.state.sections.map(({ id, title, imageUrl}) => {
				return <MenuItem key={id} title={title} imageUrl={imageUrl} />
			})}
			
		</div>
		)
	}
}

export default Directory;
