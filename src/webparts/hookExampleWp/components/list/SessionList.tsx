import * as React from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react';
import {SessionItem} from '../item/SessionItem';
import ISession from '../../interfaces/ISession';
import { useContext } from 'react';
import { GlobalContext } from '../container/Container';


export interface ISessionListProps {

}

export const SessionList = () => {
    const { sessionItems } = useContext(GlobalContext);
    return (
        <div>
            <ul>
                {sessionItems != null ?
                    sessionItems.map(item => {
                        return (<SessionItem sessionItem={item}></SessionItem>);
                    }
                    )
                    : <Spinner size={SpinnerSize.medium} />}
            </ul>
        </div>
    );
};