import React from 'react';
import { Meteor } from 'meteor/meteor';



import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

//stateless functional component
export default () =>{
  return (
    <div>
      <PrivateHeader title="You Links"/>
    <div className="page-content">
      <LinksListFilters/>
      <AddLink/>
      <LinksList/>
   </div>
    </div>
  );
};

// setting maxwidth equal to our config value
// set margin to auto on sides to center
//padding equal to  our space value
