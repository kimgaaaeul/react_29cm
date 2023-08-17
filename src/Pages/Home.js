import React from 'react';
import { useNavigate } from 'react-router-dom';
import postData from 'postData';
import showCaseData from 'showCaseData';
import newsData from 'newsData';
import '../styles/Home.css'

const Home = () => {
  const navigate = useNavigate();

  const showPost = (postId) => {
    navigate(`/post/${postId}`);
  };
  const showNews = (newsId) => {
    navigate(`/news/${newsId}`);
  };
  const showCase = (showcaseId) => {
    navigate(`/showcase/${showcaseId}`);
  };

  return (
    <div className='home_container'>
      <div className='home_inner'>
        <section className='banner_section'>
          <ul className='post'>
            <div onClick={() => showPost(0)}>
              <img src={postData[0].thumbnail} />
            </div>
            <div onClick={() => showPost(1)}>
              <img src={postData[1].thumbnail} />
            </div>
            <div onClick={() => showNews(1)}>
              <img src={ newsData[1].thumbnail} />
            </div>
            <div onClick={() => showNews(2)}>
              <img src={ newsData[2].thumbnail} />
            </div>
            {/* 선택된 포스트의 id에 맞게 클릭 이벤트 핸들러를 호출합니다 */}
          </ul>
        </section>
        <section className='feed_section'>
          <ul className='ui_feed'>
            <li className='feed_item' onClick={() => showNews(0)}>
              <img src={newsData[0].thumbnail} />
            </li>
            <li className='feed_item' onClick={() => showCase(0)}>
              <img src={showCaseData[0].thumbnail} />
            </li>
            <li className='feed_item li_sec' onClick={() => showNews(0)}>
              <div className='feed_product_sec'>
                <div className='line'></div>
                <a>
                  <div className='feed_img'>
                    <img src={newsData[2].feed_thumbnail}/>
                  </div>
                  <div className='feed_text'>
                    <h1>
                      특별한 여름을 보내요
                    </h1>
                    <p>여름의 에너제틱한 모습을 담은 에트몽의 클리어런스 기획전 소식을 알려요. 단독 ~55% 할인 혜택을 놓치지마세요.</p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

        </section>
      </div>
    </div>
  );
};

export default Home;

