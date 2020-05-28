import * as React from 'react';
import ISession from '../../interfaces/ISession';
import { useContext } from 'react';
import { GlobalContext } from '../container/Container';

export interface ISessionItemProps {
    sessionItem: ISession;
    // onDeleteItem: any;
}

export const SessionItem = (props) => {
    const { deleteSession } = useContext(GlobalContext);
    return (
        <div>
            <li>
                {props.sessionItem.title} ({props.sessionItem.speaker}) <span
                    onClick={() => {
                        deleteSession({ title: props.sessionItem.title, speaker: props.sessionItem.speaker });
                    }}>
                    X
                </span>
            </li>
        </div>
    );


};