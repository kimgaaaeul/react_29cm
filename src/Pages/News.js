import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/News.css'
import newsData from 'newsData';

const News = () => {
  let {id} = useParams();
  const [isGrid, setIsGrid] = useState(true);
  const [sliderValue, setSliderValue] = useState(267); // 중간 사이즈 기본 값
  const [targetValue, setTargetValue] = useState(267);

  const selectedNews = newsData.find((news) => news.id === parseInt(id, 10));

  if(!selectedNews) {
    return <div>뉴스를 찾을 수 없습니다</div>
  }


  const toggleLayout = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };
  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    setTargetValue(newValue); // 목표 값을 업데이트
  };

  const easeOutQuad = (t) => t * (2 - t);


  return (
  <div className='news_container'>
    <div className='news_inner'> 
      <section className='news_section'>
        <div className='news_header'>
          <div className='news_category'>{selectedNews.category}</div>
          <ul className='header_info'>
            <li>{selectedNews.delivery}</li>
            <li>{selectedNews.sale}</li>
            <li>{selectedNews.release}</li>
          </ul>
        </div>
        <div className='news_title'>
          <h1>{selectedNews.title}</h1>
          <h6>{selectedNews.desc}</h6>
          <h6>{selectedNews.date}</h6>
        </div>
        <div className='mainImg'>
          <img src={selectedNews.mainImg} />
        </div>
        <div className='brand_info'>
          <h3 className='brand_en'>{selectedNews.brand_en}</h3>
          <h5 className='brand_ko'>{selectedNews.brand_ko}</h5>
          <span className='brand_desc'>{selectedNews.brand_desc}</span>
        </div>
      </section>
    </div>
    <section className='news_collection'>
      <div className='collection_title'>
        <h3>{selectedNews.collection_brand}</h3>
        <h6>{selectedNews.collection}</h6>
      </div>
      <div className='sizebar'>
        <input
          type="range"
          id="sizeSlider"
          min="171"
          max="554"
          step="1"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </div>
      <div className={isGrid ? 'gallery-grid' : 'gallery-list'}>
        <div className="gallery-item" style={{ width: `${sliderValue}px` }}>
          <img src="path_to_your_image" alt="Image" />
        </div>
        {/* 다른 갤러리 아이템들 */}
      </div>
    </section>
  </div>
  )
}

export default News