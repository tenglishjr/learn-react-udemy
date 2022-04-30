import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
    const [term, setTerm] = useState("programming");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                "https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        format: "json",
                        origin: "*",
                        srsearch: term
                    }
                }
            );

            setResults(data.query.search);
        };

        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500);

            return () => {
                clearTimeout(timeoutId);
            };
        }

    }, [term, results.length]);

    // useEffect(() => {
    //     const search = async () => {
    //         const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
    //             params: {
    //                 action: "query",
    //                 list: "search",
    //                 origin: "*",
    //                 format: "json",
    //                 srsearch: debouncedTerm
    //             }
    //         });
    //
    //         setResults(data.query.search);
    //     };
    //     if (debouncedTerm) {
    //         search();
    //     }
    // }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    {results.snippet}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search:</label>
                    <input
                        className="input"
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;
