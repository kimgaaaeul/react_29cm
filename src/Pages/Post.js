import React from 'react';
import { useParams } from 'react-router-dom';
import postData from 'postData';

function Post() {
  let { id } = useParams();
  const selectedPost = postData.find((post) => post.id === parseInt(id, 10));

  if (!selectedPost) {
    return <div>포스트를 찾을 수 없습니다</div>;
  }

  return (
    <div className='container'>
      <div className='post'>
        <img src={selectedPost.header_img} alt={`포스트 ${selectedPost.id} 이미지`} />
        <div className='brand_info'>
          <img src={selectedPost.brand_img} alt={`포스트 ${selectedPost.id} 브랜드 이미지`} />
          <h3>{selectedPost.brand_name}</h3>
          <span>{selectedPost.brand_desc}</span>
          <button>브랜드 홈 바로가기</button>
        </div>
        <img src={selectedPost.second_img} alt={`포스트 ${selectedPost.id} 이미지`} />
        <img src={selectedPost.third_img} alt={`포스트 ${selectedPost.id} 이미지`} />
        <img src={selectedPost.fourth_img} alt={`포스트 ${selectedPost.id} 이미지`} />
        <img src={selectedPost.fifth_img} alt={`포스트 ${selectedPost.id} 이미지`} />
        <img src={selectedPost.sixth_img} alt={`포스트 ${selectedPost.id} 이미지`} />
        <div className='event'>
          <h3>SPECIAL EVENT</h3>
          <span>포커스 기간에 어다울 제품을 15만원 이상 구매한 고객 10명에게 ‘Love dream t shirt’를 증정합니다.</span>
          <span>*선착순 증정, 색상 랜덤</span>
        </div>
        <img src={selectedPost.event_item} alt={`포스트 ${selectedPost.id} 이벤트 아이템 이미지`} />
        <span>당첨자 발표 2022. 08.18</span>
      </div>
    </div> 
  );
}

export default Post;
