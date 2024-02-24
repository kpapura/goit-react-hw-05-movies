import React from 'react'
import { Button, Input, SearchFormTag } from './SearchForm.styled';
import img from "../../images/free-icon-search-bar-8053592.png"
export const SearchForm = ({getResultsBySearch, setSearchParams,searchQuery}) => {
    
    const handleChange = ({ target: { value } }) => {
        const nextParams = value !== "" ? { search: value } : {};
        setSearchParams(nextParams)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getResultsBySearch()
    }
  return (
      <SearchFormTag onSubmit={handleSubmit}>
          <label >
              Search Movie
          <Input type="text"
              name='search'
              value={searchQuery}
              onChange={handleChange} />    
          </label>
          <Button>
              <img src={img} alt="Search" width={20}/>
              <p>Search</p>
          </Button>
      </SearchFormTag>
  )
}
