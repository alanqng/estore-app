import React, { Component } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';
import { connect } from 'react-redux'
import { selectDirectorySections} from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => {

    return (
      <div className="directory-menu">
        {sections.map(({id, ...sectionProps}) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
