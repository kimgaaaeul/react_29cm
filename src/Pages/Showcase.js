import React from 'react'
import { useParams } from 'react-router-dom';
import showCaseData from 'showCaseData';
import '../styles/Showcase.css'

const Showcase = () => {
  let { id } = useParams();
  const selectedCase = showCaseData.find((data) => data.id === parseInt(id, 10));

  if (!selectedCase) {
    return <div>포스트를 찾을 수 없습니다</div>;
  }
  return (
    <div className='showcase_container'>
      <div className='showcase'>
        <img src={selectedCase.header_img} />
        <div className='event showcase_desc'>
          <h3>아름다운 쉼을 위한 <br /> 파자마 <br/> 조스라운지</h3>
          <span>조스라운지가 생각하는 실내복의 본질 '아름다운 쉼'을 담은 에센셜 라인을 소개합니다. 모달과 면 원사를 50:50 비율로 섞고, 저지(Jersey) 짜임으로 완성해 가볍고 부드러운 촉감과 신축성이 공존합니다. 4가지 색상의 파자마와 라운지 셔츠를 '볼륨 1'이라는 이름의 작은 컬렉션으로 제안합니다.</span>
          <p>2023. 8.15 - 8.27</p>
        </div>
        <img src={selectedCase.first_img} />
        <div className='benefit showcase_desc'>
          <h2>BENEFIT</h2>
          <div className='benefit_table'>
            <div className='benefit_row'>
              <h5>BENEFIT 1</h5>
              <span>단독 선발매 상품</span>
            </div>
            <div className='benefit_row'>
              <h5>BENEFIT 2</h5>
              <span>~35% 단독 할인</span>
            </div>
            <div className='benefit_row'>
              <h5>BENEFIT 3</h5>
              <span>사진 후기 이벤트 </span>
            </div>
          </div>
          <span>쇼케이스 기간에 조스라운지의 제품을 구매하고 사진 후기를 남겨주세요. 총 5명을 선정해 '에센셜 파자마 팬츠'를 증정합니다. (1 사이즈, 색상 랜덤, 비매품)</span>
          <img className='event_item' src={selectedCase.event_item}/>
          <span className='winner'>당첨자 발표 2023. 9. 6</span>
        </div>
        <div className='img_grid'>
            <img className='item content-1' src={selectedCase.img_box_1}/>
            <img className='item content-2' src={selectedCase.img_box_2}/>
            <img className='item content-3' src={selectedCase.img_box_3}/>
            <img className='item content-4' src={selectedCase.img_box_4}/>
        </div>
        <div className='brand_info desc'>
          <h3>조스라운지</h3>
          <h1>JO's lounge</h1>
          <span>좋은 옷의 기준은 서로 다르지만, 조스라운지는 ‘편하게 입는 예쁜 옷’이라는 단순한 목표를 향합니다. 2003년부터 라운지웨어를 선보이는 아틀리에 조스라운지와 편안한 일상을 함께하세요.</span>
        </div>
      </div>
      <div className='showcase_lookbook'>
        <div className='lookbook'>
          <img src={selectedCase.lookbook_1}/>
        </div>
        <div className='lookbook'>
          <img src={selectedCase.lookbook_2}/>
        </div>
        <div className='lookbook'>
          <img src={selectedCase.lookbook_3}/>
        </div>
      </div>
      <div className='showcase_recommendation'>
        <div className='rec_title'>
          <h5>SHOWCASE</h5>
          <h2>RECOMMEND ITEM</h2>
        </div>
        <div className='rec_item'>
          <div className='rec_desc'>
            <h3>Essential Navy Pajama Set</h3>
            <span>부드럽고 신축성 있는 모달과 면 저지 원단을 사용한 에센셜 3버튼 파자마 세트입니다. 카라와 앞섶, 소매와 가슴 주머니에 그레이 파이핑 장식을, 허리엔 엘라스틱 밴드를 더했습니다. 넉넉하고 편안한 스탠다드 핏으로 제작되었습니다.</span>
          </div>
          <div className='rec_item_img'>
              <img src={selectedCase.rec_item_1} />
              <img src={selectedCase.rec_item_2}/>
          </div>
          <div className='rec_product_detail'>
            <img />
          </div>
        </div>
        <div className='rec_item'>
          <div className='rec_desc'>
            <h3>Essential Grey Pajama Set</h3>
            <span>부드럽고 편안한 파자마로 커플 아이템으로도 제격입니다.</span>
          </div>
          <div className='rec_item_img'>
              <img src={selectedCase.rec_item_3} />
              <img src={selectedCase.rec_item_4}/>
          </div>
          <div className='rec_product_detail'>
            <img />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase