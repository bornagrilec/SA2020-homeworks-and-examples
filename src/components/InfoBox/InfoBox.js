import React from 'react';
import './InfoBox.scss';

// Icons
import IconLocation from '../../assets/img/location-icon.png';
import IconTime from '../../assets/img/time-icon.png';

const displaySubheader = (props) => {
    let content = '';

    if (!props.typeSpeakers) {
        content = (
            <div className="InfoBox-Subheader">
                <div className="InfoBox-SubheaderBox">
                    <figure className="InfoBox-SubheaderFigure">
                        <img className="InfoBox-SubheaderImg" src={IconLocation} alt="Location icon" />
                    </figure>
                    <span className="InfoBox-SubheaderBoxText">{props.location}</span>
                </div>
                <div className="InfoBox-SubheaderBox">
                    <figure className="InfoBox-SubheaderFigure">
                        <img className="InfoBox-SubheaderImg" src={IconTime} alt="Time icon" />
                    </figure>
                    <span className="InfoBox-SubheaderBoxText">{props.dateTime}</span>
                </div>
            </div>
        );
    }

    return content;
}

const InfoBox = (props) => {
    return (
        <div className="InfoBox">
            <div className="InfoBox-Header">
                <div className={"InfoBox-Icon " + (props.typeSpeakers ? "InfoBox-IconType-speaker" : "InfoBox-IconType-event")}></div>
                <h2 className="InfoBox-Title">{props.title}</h2>
            </div>
            {displaySubheader(props)}
            <p className="InfoBox-About">{props.about}</p>
            <div className="InfoBox-Footer">
                <a href="#" className="InfoBox-BtnJoin">Prijavi se na predavanje</a>
            </div>
        </div>
    );
}

export default InfoBox;