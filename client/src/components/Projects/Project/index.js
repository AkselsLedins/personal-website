import React from 'react';
import pure from 'recompose/pure';

const liClasses = 'col-xs-10 col-sm-5 col-lg-4';

const Project = ({ name, git, imgSrc, desc, offset }) => (
	<li className={`${liClasses} ${offset ? 'col-lg-offset-2 col-xs-offset-1 col-sm-offset-1' : ''}`}>
    {name}
		<a className="lightbox" href={git || '#'}>
			<div className="atvImg">
				<img src={imgSrc || 'images/portfolio/project1.jpg'} alt={`${name} preview`} />
				<div className="atvImg-layer" data-img={imgSrc || 'images/portfolio/project1.jpg'} />
			</div>
		</a>
   <div dangerouslySetInnerHTML={desc} />
	</li>
);

export default pure(Project);
