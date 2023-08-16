import '../styles/ProductDetail.css'
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faX, faXmark, faDownload, faCheck } from '@fortawesome/free-solid-svg-icons';
import CartModal from './Modal/CartModal';
import CouponModal from './Modal/CouponModal';
import DownloadAllModal from './Modal/DownloadAllModal';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false)
  const [isDownloadAllModalOpen, setIsDownloadAllModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [salePricePercentage, setSalePricePercentage] = useState(0);

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    // let url = `https://my-json-server.typicode.com/kimgaaaeul/react_29cm/db/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  useEffect(() => {
    // sale_price의 1% 계산
    if (product && !isNaN(parseFloat(product.sale_price))) { // 숫자로 변환 가능한지 확인
      const percentage = parseFloat(product.sale_price) * 10;
      setSalePricePercentage(percentage);
    } else {
      setSalePricePercentage(0); // 숫자가 아니면 0으로 설정
    }
  }, [product]);
  
  if(loading || product == null) return <h1>Loading</h1>

  const openCouponModal = () => {
    setIsCouponModalOpen(true);
    setIsDownloadAllModalOpen(false);
  };

  const closeCouponModal = () => {
    setIsCouponModalOpen(false);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };
  


  return (
  <Container className='product_container'>
    <div className='brand_sec'>
      <div className='brand_img'>
        <img src={product.brand_img}/>
      </div>
      <div className='brand_info'>
        <a>{product.brand}</a>
        <p>{product.brand_desc}</p>
        <button>BRAND HOME</button>
      </div>
    </div>
    <div className='product_detail_sec'>
      <div className='product_detail_img'>
        <img className='product_img' src={product.img} />
      </div>
      <div className='product_info' >
        <div className='line'></div>
        <h2 className='product_title'>{product.title}</h2>
        {/* <strong className='product_star'>{product.star}</strong> */}
        <div className='product_price_area '>
          <p className='product_before_price'>{product.before_price}</p>
          <div className='price_coupon'>
            <div className='sale_price'>
              <span className='product_sale'>{product.sale}</span>
              <span className='product_sale_price'>{product.sale_price}<em className='monetary_unit'>원</em></span>
            </div>
            <button className='coupon' onClick={openCouponModal}>쿠폰받기 <FontAwesomeIcon className='download_coupon' icon={faDownload}/> </button>
            {isCouponModalOpen && <CouponModal onClose={closeCouponModal} />}
          </div>
          <p className='earned_point'>{salePricePercentage}p (1%) 적립</p>
        </div>
        <div className='membership_price'>
          <div className='possible_price'>
            회원님 구매가능 가격
          </div>
          <div className='membership_sale_price'>
            <span>{product.membership_discount}</span>
            <span>{product.membership_price}<em className='monetary_unit'>원</em></span>
            <button id='price_desc_down'><FontAwesomeIcon icon={faChevronDown}/></button>
          </div>
        </div>
        <div className='delivery_content'>
          <h3>배송정보</h3>
          <table>
            <tr>
              <th>배송비</th>
              <td>해당 브랜드 제품으로만 50000원 이상 구매시 무료 배송 (미만시 배송비 2500원 발생)</td>
            </tr>
            <tr>
              <th>배송예정</th>
              <td><span>2일 이내</span> 출고(주말, 공휴일 제외)</td>
            </tr>
          </table>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
            Size
          </Dropdown.Toggle>
          <Dropdown.Menu id='dropdown_size'>
            {product.size.map((item) => (
              <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <div className='btn-side'>
          <button id='cartBtn' onClick={openCartModal}>장바구니 담기 </button>
          {isCartModalOpen  && <CartModal onClose={closeCartModal} />}
          <button id='buyBtn'>바로 구매하기</button>
        </div>
        {/* {isDownloadAllModalOpen && <DownloadAllModal onClose={closeDownloadAllModal} />} */}
      </div>
    </div>
  </Container>
  )
}

export default ProductDetail;