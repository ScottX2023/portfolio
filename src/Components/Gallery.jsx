import React from 'react';
import datas from '../projectsData.json';
import Card from './Card';
import '../Sass/gallery.scss';

function Gallery() {
  return (
    <>
      <h2>Mes Projets</h2>
      <main className='home_gallery'>
        {datas.map(data => (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.coverImage}
          />
        ))}
      </main>
    </>
  );
}

export default Gallery;
