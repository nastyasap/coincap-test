import {MorePaginationIconContainer, PaginationContainer} from './PaginationStyled';
import React from 'react';


type Props = {
    currentPage: number;
    pageCount: number;
    setCurrentPage: (prevPage: number) => void;
}

export const Pagination: React.FC<Props> = ({ currentPage,pageCount,setCurrentPage}) => {
    const getPageRange = (currentPage: number, pageCount: number) => {
        if (pageCount < 4) {
            return [];
        }
        let pageRange = [1, 2, 3];
        if (currentPage > 1 && currentPage !== pageCount) {
            pageRange.length = 0;
            pageRange.push(currentPage - 1);
            pageRange.push(currentPage);
            pageRange.push(currentPage + 1);
        } else if (currentPage === pageCount) {
            pageRange.length = 0;
            pageRange.push(currentPage - 2);
            pageRange.push(currentPage - 1);
            pageRange.push(currentPage);
        }
        return pageRange;
    };

    const renderPageButtons = () => {
        let result = [];
        for (let i = 1; i < pageCount + 1; i++) {
            result.push(
                <button
                    key={i}
                    className={currentPage === i ? `pageCard active` : `pageCard`}
                    onClick={() => setCurrentPage(i)}
                >
                    {i}
                </button>
            );
        }
        return result;
    };

    return (
        <PaginationContainer>
            <button
                className="pageCard"
                onClick={() => {
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                disabled={currentPage <= 1}
            >{`<`}</button>
            {pageCount < 4 && renderPageButtons()}
            {currentPage >= pageCount - 2 && pageCount > 3 && (
                <>
                    <button
                        className={currentPage === 1 ? `pageCard active` : `pageCard`}
                        onClick={() => setCurrentPage(1)}
                    >
                        1
                    </button>
                    <MorePaginationIconContainer
                        style={{
                            height: "36px",
                            width: "36px"
                        }}
                    >

                    </MorePaginationIconContainer>
                </>
            )}
            {getPageRange(currentPage, pageCount).map((page: number) => (
                <button
                    key={page}
                    className={page === currentPage ? `pageCard active` : `pageCard`}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}
            {currentPage < pageCount - 2 && pageCount > 3 && (
                <>
                    <MorePaginationIconContainer
                        style={{
                            height: "36px",
                            width: "36px"
                        }}
                    >

                    </MorePaginationIconContainer>
                    <button
                        className={
                            pageCount === currentPage ? `pageCard active` : `pageCard`
                        }
                        onClick={() => setCurrentPage(pageCount)}
                    >
                        {pageCount}
                    </button>
                </>
            )}
            <button
                className="pageCard"
                onClick={() => {
                    if (currentPage < pageCount) setCurrentPage(currentPage + 1);
                }}
                disabled={currentPage === pageCount}
            >{`>`}</button>
        </PaginationContainer>
    );
};
