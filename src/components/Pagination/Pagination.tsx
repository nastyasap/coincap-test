import {PaginationContainer} from './PaginationStyled';
import React from 'react';


type Props = {
    currentPage: number;
    setCurrentPage: (prevPage: number) => void;
}

export const Pagination: React.FC<Props> = ({currentPage, setCurrentPage}) => {
    const getPageRange = (currentPage: number) => {
        let pageRange = [1, 2, 3];
        if (currentPage > 1) {
            pageRange.length = 0;
            pageRange.push(currentPage - 1);
            pageRange.push(currentPage);
            pageRange.push(currentPage + 1);
        }
        return pageRange;
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
            {getPageRange(currentPage).map((page: number) => (
                <button
                    key={page}
                    className={page === currentPage ? `pageCard active` : `pageCard`}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className="pageCard"
                onClick={() => {
                    if (currentPage < 2000) setCurrentPage(currentPage + 1);
                }}
                disabled={currentPage === 2000}
            >{`>`}</button>
        </PaginationContainer>
    );
};
