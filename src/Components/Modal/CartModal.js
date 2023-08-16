import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../Modal/CartModal.css'

const CartModal = ({ onClose }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);


  const closeCartModal = () => {
    setIsCartModalOpen(false);
    onClose()
  };
  return (
    <div className='ModalBackdrop'>
      <div className='cart_ModalContainer' onClick={(e) => e.stopPropagation()}>
        <button className='cart_ExitBtn' onClick={closeCartModal}><FontAwesomeIcon icon={faXmark}/></button>
        <div className='cart_modalView'>
          장바구니에 상품이 담겼습니다
          <a href='#'>장바구니 바로가기 </a>
        </div>
      </div>
    </div>
  )
}

export default CartModal