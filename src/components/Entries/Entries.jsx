import React from 'react';
import diaryService from '../../utils/diaryService'


function DiaryEntries({entry, ...props}) {

    const handleDelete = async (e) => {
        // e.preventDefault();
        await diaryService.deleteEntry(entry).then(diary => props.updateDiary(diary));
        props.history.push('/dank-diary');
    }

    return (
        <>
            <p>comments: {entry.comments}</p>
            <button className="" onClick={handleDelete}>delete entry</button>
        </>
    )
}

export default DiaryEntries;