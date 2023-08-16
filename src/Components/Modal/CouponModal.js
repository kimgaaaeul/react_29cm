import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import DownloadAllModal from './DownloadAllModal';
import '../Modal/CouponModal.css'


const CouponModal = ({ onClose }) => {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(true)
  const [isDownloadAllModalOpen, setIsDownloadAllModalOpen] = useState(false)
  // const [salePricePercentage, setSalePricePercentage] = useState(0);

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    // let url = `https://my-json-server.typicode.com/kimgaaaeul/react_29cm/db/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, []);


  const closeCouponModal = () => {
    setIsCouponModalOpen(false);
    onClose(); // 부모 컴포넌트로부터 받은 onClose 함수를 호출하여 모달을 닫습니다.
  };

  const openDownloadAllModal = () => {
    setIsCouponModalOpen(false);
    setIsDownloadAllModalOpen(true);
  }
  const closeDownloadAllModal = () => {
    setIsDownloadAllModalOpen(false)
    onClose();
  }


  return (
      <div className='ModalBackdrop' onClick={closeCouponModal}>
        {product && (
          <div className='coupon_ModalContainer' onClick={(e) => e.stopPropagation()}>
            <h5> 쿠폰 </h5>
            <div className='coupon_ModalView'>
            <span className='bonus_coupon'>보너스 쿠폰</span>
            <button className='coupon_box'>
              <div className='bonus'>BONUS</div>
              <div className='coupon_desc'>
                <span>{product.membership_discount}</span>
                <span>[{product.membership_discount} 혜택] 여름의 빛나는 순간들</span>
                <span>13일 남음</span>
                <button className='download_btn'><FontAwesomeIcon icon={faDownload}/></button>
              </div>
            </button>
            </div>
            <div className='coupon_exit_download'>
              <button onClick={closeCouponModal} className='coupon_exitBtn' type='button'>닫기</button>
              <button onClick={openDownloadAllModal} className='coupon_downloadBtn' type='button' >전체 다운로드</button>
              {isDownloadAllModalOpen && <DownloadAllModal onClose={closeDownloadAllModal} />}
            </div>
          </div>
        )}

      </div>
  )
}

export default CouponModal