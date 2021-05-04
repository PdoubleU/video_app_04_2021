import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const ListPagination = ({ ...props }) => {
  const { handleClick, itemsPerPage, totalItems } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination className="m-auto" aria-label="Page navigation">
      <PaginationItem>
        <PaginationLink
          onClick={() => handleClick(1)}
          first
          href="#"
          id="first"
        />
      </PaginationItem>
      {pageNumbers.map((num) => (
        <PaginationItem id={num}>
          <PaginationLink onClick={() => handleClick(num)} href="#">
            {num}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink
          onClick={() => handleClick(pageNumbers.length)}
          last
          href="#"
          id="last"
        />
      </PaginationItem>
    </Pagination>
  );
};

export default ListPagination;
