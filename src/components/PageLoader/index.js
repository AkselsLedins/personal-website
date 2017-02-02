import React from 'react';
import pure from 'recompose/pure';

const PageLoader = () => (
  <div id="pageloader">
		<div className="pageloader-content">
			<img src="images/loading.gif" alt="" />
			<h6>loading</h6>
		</div>
	</div>
);

export default pure(PageLoader);
