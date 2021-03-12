import React, { useEffect, useState } from "react"
import { useParams } from 'react-router';
import Book01 from '../books/book/Book01.json'
import Book02 from '../books/book/Book02.json'
import Book03 from '../books/book/Book03.json'
import Page from './Page'
const Chapter = () => {
    const { book } = useParams();
    const { chapter } = useParams();
    let findedChapters = null;
    let pathTemp = null;
    const [urls, setUrls] = useState([]);
    useEffect(() => {

        switch (book) {
            case "1":
                if (Book01 && Book01.Chapters) {
                    findedChapters = Book01.Chapters.filter((data) => {
                        return data.ChapterNum === +chapter;
                    });
                    if (findedChapters && findedChapters.length === 1) {
                        const pages = findedChapters[0].Pages;
                        console.log({pages})
                        for (var i = 0; i < pages.length; i++) {

                            pathTemp = pages[i].pathPage;
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
                break;

            case "2":
                if (Book02 && Book02.Chapters) {
                    findedChapters = Book02.Chapters.filter((data) => {
                        return data.ChapterNum === +chapter;
                    });
                    if (findedChapters && findedChapters.length === 1) {
                        const pages = findedChapters[0].Pages;
                        console.log({pages})
                        for (var i = 0; i < pages.length; i++) {

                            pathTemp = pages[i].pathPage;
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
                break;

            case "3":
                if (Book03 && Book03.Chapters) {
                    findedChapters = Book03.Chapters.filter((data) => {
                        return data.ChapterNum === +chapter;
                    });
                    if (findedChapters && findedChapters.length === 1) {
                        const pages = findedChapters[0].Pages;
                        console.log({pages})
                        for (var i = 0; i < pages.length; i++) {

                            pathTemp = pages[i].pathPage;
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
                break;


        }
    }, [])
    console.log({urls})
        return (<div>
        <br />
        <p>Book: {book}</p>
        <p>Chapter: {chapter}</p>
        <p>{console.log({ urls })}</p>
        <p><Page props={urls}/></p>
    </div>)
}

export default Chapter