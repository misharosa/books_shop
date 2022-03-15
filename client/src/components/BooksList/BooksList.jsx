import React, { useMemo, useState } from 'react';
import { BookItem } from "./BooksItem/BookItem";
import { Search } from "../Search/Search";
import "./BooksList.css"

export const BooksList = ({ books }) => {

    const [filterValue, setFilterValue] = useState('')

    const handleFilterBooks = useMemo(() => {
        return books.filter(book => (
            book.name.toLowerCase().includes(filterValue.toLowerCase())
        ))
    }, [filterValue, books])

    return (
        <>
            <Search
                setFilterValue={setFilterValue}
                filterValue={filterValue}
            />
            {handleFilterBooks.length > 0 &&
            <div className='goods'>
                {handleFilterBooks.map(book => (
                    <div key={book.id} className="goods__item" >
                        <BookItem book={book}/>
                    </div>
                ))}
            </div>
            }
        </>
    );
};
