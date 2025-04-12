// components/Pagination.js
import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationControlled = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (event, value) => {
    onPageChange(value);
  };

  if (totalPages <= 1) return null; 

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        size="large"
        shape="rounded"
      />
    </Stack>
  );
};

export default PaginationControlled;
