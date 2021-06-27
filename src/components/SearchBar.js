import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
    const [term, setTerm] = useState('');

    const onInputChange = event => {
        setTerm(event.target.value);
    }

    const onFormSubmit = event => {
        event.preventDefault();
        onTermSubmit(term);
    }

    return(
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Search Videos</label>
                    <input type="text" value={term} onChange={onInputChange}/>
                </div>
            </form>
        </div>
    );

}


export default SearchBar;