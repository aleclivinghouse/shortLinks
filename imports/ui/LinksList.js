//this will fit inside the links component
//THIS IS A LIST OF ALL THE LINKS that the user has posted
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import FlipMove from 'react-flip-move';

import { Links } from '../api/links';
import LinksListItem from './LinksListItem';
export default class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }
  //this gets the session from
  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      const links = Links.find({
        visible: Session.get('showVisible')
      }).fetch();
      this.setState({ links });
    });
  }
  componentWillUnmount() {
    this.linksTracker.stop();
  }


  renderLinksListItems() {
    if (this.state.links.length === 0) {
      return (
        <div className="item">
          <p>No Links Found</p>
        </div>
      );
    }
   return this.state.links.map((link) => {
     const shortUrl = Meteor.absoluteUrl(link._id);
     return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>;
   });
  }

  //this is what renders in the html
  render() {
    return (
      <div>
        <p>Links List</p>
        <FlipMove maintainContainerHeight={true}>
          {this.renderLinksListItems()}
        </FlipMove>
        </div>

    );
  }
};
