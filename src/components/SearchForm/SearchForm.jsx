import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input, SearchFormTag } from './SearchForm.styled';

import img from '../../images/free-icon-search-bar-8053592.png';

export const SearchForm = ({ setSearchParams }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = data => {
    setSearchParams(data.param ? { query: data.param } : {});
    reset();
  };
  return (
    <SearchFormTag onSubmit={handleSubmit(submit)}>
      <Input {...register('param')} type="text" />
      <Button>
        <img src={img} alt="Search" width={20} />
        <p>Search</p>
      </Button>
    </SearchFormTag>
  );
};
