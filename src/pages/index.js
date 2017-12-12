import React from "react"
import {PhotoSwipeGallery} from 'react-photoswipe';
import './style.css';
import { Container, Segment } from "semantic-ui-react"
let items = [
  {
    src: 'https://image.ibb.co/hNy40G/103003.jpg',
    thumbnail: 'https://image.ibb.co/hNy40G/103003.jpg',
    w: 1200,
    h: 900,
    title: 'Image 1'
  },
  {
    src: 'https://preview.ibb.co/i1KBfG/ac_lloyd.jpg',
    thumbnail: 'https://preview.ibb.co/i1KBfG/ac_lloyd.jpg',
    w: 1200,
    h: 900,
    title: 'Image 2'
  }
];

function getThumbnailContent(item){
  return (
    <img src={item.thumbnail} width={120} height={90}/>
  );
}

export default () => {
  return (
      <Container>
        <Segment vertical>
          <h1>hello</h1>
          <PhotoSwipeGallery items={items} thumbnailContent={getThumbnailContent}/>
          <br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <h1>At last Text</h1>
        </Segment>
      </Container>
  );
}
