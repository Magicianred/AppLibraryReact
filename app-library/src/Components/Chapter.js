import React, { useEffect, useState } from "react"
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { useParams } from 'react-router';
import Book01 from '../../public/books/book/Book01.json'
import Book02 from '../../public/books/book/Book02.json'
import Book03 from '../../public/books/book/Book03.json'
import Page from './Page'
const Chapter = () => {
    const { book } = useParams();
    const { chapter } = useParams();

    const [urls, setUrls] = useState([]);

    const setUrlsPages = (chapters) => {
        
        if (chapters && chapters.length === 1) {
            const pages = chapters[0].Pages;
            console.log({pages})
            for (let i = 0; i < pages.length; i++) {

                const pathTemp = pages[i].pathPage;
                const newItem = {
                    id: i,
                    pagePath: pathTemp
                }
                const newUrl = urls;
                newUrl.push(newItem);
                console.log({newUrl});
                setUrls(newUrl);

            }
        }
    }

    useEffect(() => {
        let chapters = [];
        switch (book) {
            case "1":
                if (Book01 && Book01.Chapters) {
                    chapters = Book01.Chapters.filter((data) => {
                        return data.ChapterNum === +chapter;
                    })
                    setUrlsPages(chapters);
                }
                break;

            case "2":
                if (Book02 && Book02.Chapters) {
                    chapters = Book02.Chapters.filter((data) => {
                        return data.ChapterNum === +chapter;
                    })
                    setUrlsPages(chapters);

                }
                break;

            case "3":
                if (Book03 && Book03.Chapters) {
                    chapters = Book03.Chapters.filter((data) => {
                        return data.ChapterNum === +chapter;
                    })
                    setUrlsPages(chapters);

                }
                break;

            default:
                console.warn('no book')
                break;
        }
    }, [book, chapter, urls])
    
    let path = '/books/book/'+book+'/chapter/'+chapter+'/pages'
    
    return (
        <Router>
            <div>
            <br />
            <p>Book: {book}</p>
            <p>Chapter: {chapter}</p>
            <p>{console.log(typeof(urls))}</p>
            <Route path={path}><p><Page values={urls}/></p></Route>
        </div></Router>
    )
}

export default Chapter