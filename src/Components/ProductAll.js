import React from 'react';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams, useNavigate } from 'react-router-dom';

const ProductAll = () => {
  const [productsList, setProductList] = useState([]);
  const navigate = useNavigate();
  const [query,setQuery] = useSearchParams();
  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      console.log("키워드", keyword);
      navigate(`/?q=${keyword}`);
      // navigate('/products/0')
    }
  }

  const getProduct = async () => {
    let searchQuery = query.get('q') || '';
    console.log('쿼리값?', searchQuery);
    let url = `http://localhost:5000/products/${searchQuery}`;
    // let url = `https://my-json-server.typicode.com/kimgaaaeul/react_29cm/products/${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("데이터", data);
    setProductList(data)
  }
  
  useEffect(() => {
    getProduct();
  },[query])
  
  // if (!productsList) {
  //   return <div>로딩 중...</div>;
  // }
    return (
      <Container>
        <Row>
          {productsList.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

export default ProductAll
