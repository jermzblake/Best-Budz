import React from 'react';
import diaryService from '../../utils/diaryService';
import '../DiaryEntries/DiaryEntries.css'



function DiaryEntries({entry, ...props}) {

    let date = entry.date
    let noTimeDate = date.slice(0,10);

    const handleDelete = async (e) => {
        // e.preventDefault();
        await diaryService.deleteEntry(entry).then(diary => props.updateDiary(diary));
        props.history.push('/dank-diary');
    }

    const makeList = (arr) => {
        let newarr = []
        arr.forEach(obj => {
            if(Object.values(obj)[0] === true) {
                newarr.push(Object.keys(obj)[0])
            }
        })
        let list = newarr.join(', ')
        return list
    }

    return (
        <>
            <div href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{entry.strain }&nbsp;{entry.rating}/10</h5>
                    <small className="date">{noTimeDate}</small>
                </div>
                <p className="mb-1"><span className="pvefx">Positive Effects:</span> {makeList(entry.positiveEffects)} &nbsp;&nbsp;|&nbsp;&nbsp; <span className="nvefx">Negative Effects:</span> {makeList(entry.negativeEffects)} </p>
                <small className="text-muted">{entry.type}</small>
            </div>
        </>
    )
}

export default DiaryEntries;