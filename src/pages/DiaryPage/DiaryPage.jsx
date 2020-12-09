import React from 'react';
import {Link} from 'react-router-dom';
import DiaryEntries from '../../components/Entries/Entries';

function DiaryPage(props) {
            if (props.diary.entries && props.diary.entries.length > 0 ){
                return (
                    <>
                        <header>Diary Page</header>
                        {props.diary.entries.map((entry, idx) => (
                            <DiaryEntries 
                                entry={entry}
                                updateDiary={props.updateDiary}
                                {...props}
                                key={idx}
                            />
                        ))}
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