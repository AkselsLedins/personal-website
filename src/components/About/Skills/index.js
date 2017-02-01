import React from 'react';
import pure from 'recompose/pure';

import Bar from './Bar';

// data
import dataDev from './data/dev';
import dataOthers from './data/others';

const Skills = () => (
  <span>
    {/* Languages */}
    <div className="row">
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <h3>Dev. languages</h3>
        { dataDev.map(i => <Bar key={`${i.name}-skill`} name={i.name} value={i.value} />) }
      </div>
    </div>

    {/* Others skills - not exhaustive */}
    <div className="row">
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <h3>Others</h3>
        { dataOthers.map(i => <Bar key={`${i.name}-skill`} name={i.name} value={i.value} color={'#2196F3'} />) }
      </div>
    </div>
  </span>
);

export default pure(Skills);
