import React from 'react'; 

import './PreviewCollection.styles.scss';
import { CollectionItem } from '../collection-item/CollectionItem.component'
export const PreviewCollection = ({title, items}) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {
        items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherCollections} ) => (
          <CollectionItem key={id} {...otherCollections}  />
        ))
      }
    </div>
  </div>
)