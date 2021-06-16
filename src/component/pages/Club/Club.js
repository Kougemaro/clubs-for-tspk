import React from 'react';
import s from './Club.module.css';
import { useParams } from "react-router-dom"
import ClubBlock from "../Home/ClubBlock";
import HomeLink from "./HomeLink";
import firebase from "../../../base";

const Club = () => {
    const {urlTitle} = useParams();
    let array = []
    let listClubs = firebase.database().ref('clubs');
    listClubs.on('value', (snapshot => {
        snapshot.forEach(function (childSnapshot) {
            let childData = childSnapshot.val();
            array.push(childData)
        });
    }));
    let dataFilter = array.filter(block => block.title === urlTitle);
    let data = dataFilter[0];
    const blockFirst =  data.blockFirst;
    const blockSecond = data.blockSecond;
    return (
        <div className="container">
            <HomeLink/>
            <div className={s.title}>
                <div className={s.title_left}>
                    <h1 className={data.name}>{data.name}</h1>
                    <p className={s.description}>{data.description}</p>
                </div>
                <div className={s.image}>
                    <img src={window.location.origin + '/img/' + data.img} alt={data.title}/>
                </div>
            </div>
            <main>
                <div className="all-clubs grid-container">
                    <ClubBlock blockFirst={blockFirst} blockSecond={blockSecond} title="Когда работает клуб?" backgroundColor="var(--block-background-yellow-milk)" backgroundColorHover="var(--block-background-yellow-milk--hover)"/>
                    <ClubBlock blockFirst={blockFirst} blockSecond={blockSecond} title="Как вступить в клуб?" backgroundColor="var(--block-background-purple-milk)" backgroundColorHover="var(--block-background-purple-milk--hover)"/>
                </div>
            </main>
        </div>
    );
};

export default Club;
