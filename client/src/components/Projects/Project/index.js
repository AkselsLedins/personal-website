import React from 'react';
import pure from 'recompose/pure';

import ExternalLink from '../../generic/ExternalLink';

const liClasses = 'col-xs-10 col-sm-5 col-lg-4';

const Tag = ({ children }) => <small style={{fontWeight: 300}}>{` [${children}] `}</small>;

const Project = ({ name, git, imgSrc, desc, offset, tags }) => (
	<li className={`${liClasses} ${offset ? 'col-lg-offset-2 col-xs-offset-1 col-sm-offset-1' : ''}`}>
    {name}<br />
		<div>{ tags.map(text => <Tag key={text}>{text}</Tag>)}</div>
		<a className="lightbox" href={git || '#'}>
			<div className="atvImg">
				<img src={imgSrc || 'images/portfolio/project1.jpg'} alt={`${name} preview`} />
				<div className="atvImg-layer" data-img={imgSrc || 'images/portfolio/project1.jpg'} />
			</div>
		</a>
	 <br />
   <div dangerouslySetInnerHTML={desc} />
	 <br />
	 <div>Source <ExternalLink href={git}>Here</ExternalLink></div>
	</li>
);

export default pure(Project);
