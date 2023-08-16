import React from 'react';
import { useNavigate } from 'react-router-dom';
import postData from 'postData';
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
    <div className='container'>
      <div className='inner'>
        <section className='banner_section'>
          <ul className='post'>
            <div onClick={() => showPost(0)}>
              <img src={postData[0].thumbnail} />
            </div>
            <div onClick={() => showPost(1)}>
              <img src={postData[1].thumbnail} />
            </div>
            <div onClick={() => showNews(2)}>
              <img src={postData[2].thumbnail} />
            </div>
            {/* 선택된 포스트의 id에 맞게 클릭 이벤트 핸들러를 호출합니다 */}
          </ul>
        </section>
        <section className='feed_section'>
          <ul className='ui_feed'>
            <div className='feed_item' onClick={() => showNews(3)}>
              <img src={postData[3].thumbnail} />
            </div>
            <div className='feed_item' onClick={() => showCase(4)}>
              <img src={postData[4].thumbnail} />
            </div>
          </ul>

        </section>
      </div>
    </div>
  );
};

export default Home;

