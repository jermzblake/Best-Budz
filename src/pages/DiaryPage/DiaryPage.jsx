import React from 'react';
import {Link} from 'react-router-dom';
import DiaryEntries from '../../components/DiaryEntries/DiaryEntries';



function DiaryPage(props) {
            if (props.diary.entries && props.diary.entries.length > 0 ){
                return (
                    <>
                        <header>Diary Page</header>
                        <div className="list-group">
                        {props.diary.entries.slice(0).reverse().map((entry, idx) => (
                            <DiaryEntries 
                                entry={entry}
                                updateDiary={props.updateDiary}
                                {...props}
                                key={idx}
                            />
                        ))}
                        </div>
                    </>
                )
            }
            return (
                <>
                    <header>Diary Page</header>
                    <p>You have no entries create one</p>
                </>
            )

}

export default DiaryPage