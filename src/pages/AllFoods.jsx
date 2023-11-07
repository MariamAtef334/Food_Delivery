import { React, useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import ProductCard from '../components/UI/product-card/ProductCard';
import products from '../assets/fake-data/products';
import '../styles/all-foods.css';
import ReactPaginate from 'react-paginate';
import '../styles/pagination.css';
import { Link } from 'react-router-dom';
const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [productData, setProductData] = useState(products);
  const [pageNumber, setPageNumber] = useState(0);
  const [sortingOption, setSortingOption] = useState('default');
  const searchedProduct = products
    .filter(item => searchTerm === '' || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortingOption === 'ascending') {
        return a.title.localeCompare(b.title);
      } else if (sortingOption === 'descending') {
        return b.title.localeCompare(a.title);
      } else if (sortingOption === 'high-price') {
        return b.price - a.price;
      } else if (sortingOption === 'low-price') {
        return a.price - b.price;
      }
      return 0; // Default sorting
    });


  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }
  const handleSortingOptionChange = (e) => {
    setSortingOption(e.target.value);
  }

  return (
    <Helmet  title='All Foods'>

      <CommonSection title='All__foods'></CommonSection>
      <section>

        <div class="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 mt-3 ">
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input type='text' placeholder='I’m lookig for........' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                <span><i className='ri-search-line'></i></span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 mb-5 ">
              <div className="sorting__widget text-end mt-3">
                <select className='w-50' onChange={handleSortingOptionChange}>
                  <option>Defualt</option>
                  <option value="ascending" onClick={()=>{setSortingOption('ascending')}}>Alphapetically, A-Z</option>
                  <option value="descending" onClick={()=>{setSortingOption('descending')}}>Alphapetically, Z-A</option>
                  <option value="high-price"onClick={()=>{setSortingOption('high-price')}}>High price</option>
                  <option value="low-price"onClick={()=>{setSortingOption('low-price')}}>Low price</option>

                </select>
              </div>
            </div>
            {
              displayPage?.map((item) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4 items">
                  {" "}
                <ProductCard key={item.id} item={item} />
                </div>
              ))
            }
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName='paginationBttns'
              />
            </div>
          </div>
        </div>

      </section>
    </Helmet>
  )
}

export default AllFoods