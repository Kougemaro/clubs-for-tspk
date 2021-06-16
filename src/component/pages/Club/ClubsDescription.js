import React from 'react';
import s from './Club.module.css'

const ClubDescription = (props) => {
    const blockFirst = props.blockFirst;
    const blockSecond = props.blockSecond;
    const title = props.title;
    //Надо решить где тру и где фолз вывода информации
    // и пофиксить картинки а вообще похуй иди лучше чего нибудь сладкого поешь
    function renderDescription(title,blockFirst,blockSecond){
        if(title === "Когда работает клуб?"){
             return (<div>
                <div className={s.time}>-{blockFirst.timeFirst}</div>
                <div className={s.time}>-{blockFirst.timeSecond}</div>
                <div className={s.place}>Клуб находится в {blockFirst.place}</div>
            </div>)
        }else {
            return (<div>
                <div className={s.description}>Если вы хотите вступить в наш клуб, то можете обратиться сюда для
                    составления заявки.
                </div>
                <div className={s.link}><a href={blockSecond.link}>{blockSecond.link}</a></div>
            </div>)
        }
    }
    return (
        <div className={s.description}>
            {renderDescription(title,blockFirst,blockSecond)}
        </div>
    );
};

export default ClubDescription;
