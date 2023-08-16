import React, { useState } from 'react'
import '../Modal/DownloadAllModal.css'

const DownloadAllModal = ({ onClose }) => {
  // const [isDownloadAllModalOpen, setIsDownloadAllModalOpen] = useState(true)

  const closeDownloadAllModal = () => {
    onClose(); // 부모 컴포넌트로부터 받은 onClose 함수를 호출하여 모달을 닫습니다.
  };

  return (
    <div className='ModalBackdrop'>
      <div className='DownloadAll_ModalContainer'>
        <div className='DownloadAll_desc'>
          <h4>1개의 쿠폰이 발급되었습니다.</h4>
          <span>상품 주문 시 발급 받은 쿠폰을 사용해주세요</span>
          <button className='closeDownloadAllModal_btn' onClick={closeDownloadAllModal}>
            확인
          </button>
        </div>
      </div>
    </div>

  )
}

export default DownloadAllModal