import React from 'react';
import { MenuItem } from '../menu-item/MenuItem.component'

import './Directory.styles.scss';
import { sections } from './directory.data'
export class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [...sections]
    }
  }
  render() {
    const {sections} = this.state;
    return(
      <div className="directory-menu">
        {
          sections.map((item,key) => (
            <MenuItem
              {...item}
              key={key}
            />
          ))
        }
      </div>
    )
  }
}