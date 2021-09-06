import React from 'react';
import {Link} from 'react-router-dom';
import DiaryEntries from '../../components/DiaryEntries/DiaryEntries';
import '../DiaryPage/DiaryPage.css';



function DiaryPage(props) {
            if (props.diary.entries && props.diary.entries.length > 0 ){
                return (
                    <>
                        <header>{props.user.name}'s Dank Diary</header>
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
                    <header>{props.user.name}'s Dank Diary</header>
                    <div className="container">
                        <Link to="entry-form" className="Link entry-link">You have no entries. Click here to create one.</Link>
                    </div>
                </>
            )

}

export default DiaryPage