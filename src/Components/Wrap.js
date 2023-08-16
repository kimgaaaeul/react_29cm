import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorClosed, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContent from './ProductContent';
import ProductAll from './ProductAll';
import '../styles/Wrap.css'

const Wrap = () => {
  return (
    <div className='content'>
      <div className='sidebar'>
        <h3>BEST</h3>
        <div></div>
        <ul>
          <li>여성의류</li>
          <li>여성신발</li>
          <li>여성가방</li>
          <li>여성악세서리</li>
          <li>남성의류</li>
          <li>남성신발</li>
          <li>남성가방</li>
          <li>남성악세서리</li>
          <li>가구, 인테리어</li>
          <li>가전</li>
          <li>컬처</li>
          <li>뷰티</li>
          <li>유아, 아동</li>
        </ul>
      </div>
      <div className='right_side'>
        <div className='type'>
          <div className='main_title'>
            <h2>여성의류</h2>
          </div>
          <div className='category'>
            <ul className='categoryMediumList_lnb'>
              <span id='categoryMediumList_all' className='category_lnb_each'>
                <input type="radio" value checked/>
                <label className='categoryMediumList' title='categoryMediumList'>전체</label>
              </span>
              <span className='category_lnb_each'>
                <input type="radio" value="26811100"/>
                <label className='categoryMediumList' title='categoryMediumList'>상의</label>
              </span>
              <span className='category_lnb_each'>
                <input type="radio" value="26812100"/>
                <label className='categoryMediumList' title='categoryMediumList'>원피스</label>
              </span>
              <span className='category_lnb_each'>
                <input type="radio" value="26813100"/>
                <label className='categoryMediumList' title='categoryMediumList'>바지</label>
              </span>
              <span className='category_lnb_each'>
                <input type="radio" value="26814100"/>
                <label className='categoryMediumList' title='categoryMediumList'>액티브웨어</label>
              </span>
              <span className='category_lnb_each'>
                <input type="radio" value="26815100"/>
                <label className='categoryMediumList' title='categoryMediumList'>스커트</label>
              </span>
              <span className='category_lnb_each'>
                <input type="radio" value="26816100"/>
                <label className='categoryMediumList' title='categoryMediumList'>아우터</label>
              </span>
              <span className='category_lnb_each'>
                <input type="radio" value="26817100"/>
                <label className='categoryMediumList' title='categoryMediumList'>니트웨어</label>
              </span>
              <span className='category_lnb_each'>
                <input type="radio" value="26818100"/>
                <label className='categoryMediumList' title='categoryMediumList'>이너웨어</label>
              </span>
              <span className='category_lnb_each'>
                <input type="radio" value="26819100"/>
                <label className='categoryMediumList' title='categoryMediumList'>홈웨어</label>
              </span>
            </ul>
          </div>
          <div className='time'>
            <span>실시간</span>
            <span>일간</span>
            <span>주간</span>
            <span>월간</span>
          </div>
        </div>
        <div className='inner_content'>
          <ProductAll />
        </div>
      </div>
    </div>
  )
}

export default Wrap
