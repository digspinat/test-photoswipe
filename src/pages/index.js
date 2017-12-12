import React from "react"
import {PhotoSwipeGallery} from 'react-photoswipe';
import './style.css';
import { Container, Segment } from "semantic-ui-react"
let items = [
  {
    src: 'http://global.canon/en/imaging/eosd/samples/eosm6/downloads/02.jpg',
    thumbnail: 'http://global.canon/en/imaging/eosd/samples/eosm6/downloads/02.jpg',
    w: 1200,
    h: 900,
    title: 'Image 1'
  },
  {
    src: 'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-300mmf_35-56g_ed_vr/img/sample/sample4_l.jpg',
    thumbnail: 'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-300mmf_35-56g_ed_vr/img/sample/sample4_l.jpg',
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
