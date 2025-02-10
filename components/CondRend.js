import React, {useState} from "react";

function CondRend() {
    const [filter, setFilter] = useState('consonant');
    const items = [
        {id: 1, name: 'A', status: 'vowel'},
        {id: 2, name: 'B', status: 'consonant'},
        {id: 3, name: 'C', status: 'consonant'},
        {id: 4, name: 'D', status: 'consonant'},
        {id: 5, name: 'E', status: 'vowel'},
        {id: 6, name: 'F', status: 'consonant'},
        {id: 7, name: 'G', status: 'consonant'},
        {id: 8, name: 'H', status: 'consonant'},
        {id: 9, name: 'I', status: 'vowel'},
        {id: 10, name: 'J', status: 'consonant'},
        {id: 11, name: 'K', status: 'consonant'},
        {id: 12, name: 'L', status: 'consonant'},
        {id: 13, name: 'M', status: 'consonant'},
        {id: 14, name: 'N', status: 'consonant'},
        {id: 15, name: 'O', status: 'vowel'},
        {id: 16, name: 'P', status: 'consonant'},
        {id: 17, name: 'Q', status: 'consonant'},
        {id: 18, name: 'R', status: 'consonant'},
        {id: 19, name: 'S', status: 'consonant'},
        {id: 20, name: 'T', status: 'consonant'},
        {id: 21, name: 'U', status: 'vowel'},
        {id: 22, name: 'V', status: 'consonant'},
        {id: 23, name: 'W', status: 'consonant'},
        {id: 24, name: 'X', status: 'consonant'},
        {id: 25, name: 'Y', status: 'consonant'},
        {id: 26, name: 'Z', status: 'consonant'},
    ]
    const filteredItems = items.filter(item => item.status === filter);
    return (
        <div>
            <button onClick = {() => setFilter('consonant')}>Show consonants</button>
            <button onClick = {() => setFilter('vowel')}>Show vowels</button>
            <ul>
                {filteredItems.map(item => (
                    <li key = {item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )

}
export default CondRend;