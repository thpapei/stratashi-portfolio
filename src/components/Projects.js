import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { items } from '../images/projects/videos';

const Projects = _ => {

  const [videos, setVideos] = useState([]);

  console.log(videos);

  const onSlide = (e) => {
    videos.forEach(player => {
      console.debug('ho')
      player.pauseVideo();

    })
  }

  const onReady = e => {
    setVideos(oldVideos => {
      if (oldVideos.length < items.length) {
        return [...oldVideos, e.target];
      }
      else return oldVideos;
    });
  }

  const renderVideo = item => {
    return (
      <p>video</p>
    )
  }

  return (
    <div className='projects'>
      <h3>{videos.length}</h3>
      <ImageGallery items={items} onSlide={onSlide} renderItem={renderVideo} />
      <button onClick={onSlide}>pause</button>
    </div>
  )
};

export default Projects;