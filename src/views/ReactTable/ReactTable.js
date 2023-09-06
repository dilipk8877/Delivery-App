import React, { useEffect } from "react";
import {
  useSortBy,
  useTable,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { useSelector } from "react-redux";

const ReactTable = ({ data, columns }) => {
  const {searchField} = useSelector((state)=>state.users)
  const tableInstance = useTable(
    {
      columns,
      data,
      autoResetPage: false,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    pageCount,
    state: { pageIndex, pageSize },
  } = tableInstance;

  useEffect(()=>{
    gotoPage(0)
  },[searchField])

  useEffect(()=>{
    if(data?.length % 10 ===0){
      previousPage()
    }
  },[data])

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, [pageIndex]);
  
  return (
    <>
      <div>
        <table {...getTableProps()} className="category-table">
          <thead className="category-table-head">
            {headerGroups.map((headerGroups, index) => (
              <tr {...headerGroups.getHeaderGroupProps()} key={index}>
                {headerGroups.headers.map((columns,index) => (
                  <th key={index}>
                    {columns.render("Header")}
                    <span {...columns.getHeaderProps(columns.getSortByToggleProps())}>
                    {!columns.disableSortBy &&
                      (columns.isSorted ? (
                        columns.isSortedDesc ? (
                          <>
                          <BsArrowDown className="arrow-down" />
                          <BsArrowUp />
                          </>
                        ) : (
                          <>
                          <BsArrowDown />
                          <BsArrowUp className="arrow-down" />
                          </>
                        )
                      ) : (
                        <>
                          <BsArrowUp />
                          <BsArrowDown />
                        </>
                      ))}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="category-table-body">
            {data.length !== 0 ? (
              page.map((row,index) => {
                prepareRow(row);
                return (
                  <tr className="th-table" {...row.getRowProps()} key={index}>
                    {row.cells.map((cell, index) => {
                      return (
                        <th className="th-table-data" {...cell.getCellProps()} key={index}>{cell.render("Cell")}</th>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length}> No record found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {data?.length > 10 ? (
        <div className="pagination-button">
          <button onClick={() => gotoPage(0)} disabled={pageIndex === 0}>
          {'<<'}
        </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
           {'<'}
          </button>
          <strong className="me-2">
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>
          <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={pageIndex === pageCount - 1}
        >
          {'>>'}
        </button>{' '}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ReactTable;
