import * as React from 'react';
import { SessionService } from '../../services/SessionService';
import { SessionList } from '../list/SessionList';
import ISession from '../../interfaces/ISession';
import { Form } from '../form/Form';
import { sessionReducer } from '../reducer/reducer';

export const GlobalContext = React.createContext(undefined);

export const Container = (props) => {

    const [sessionItems, setSessionItems] = React.useState([]);
    const { GetSessions } = SessionService();

    // async
    React.useEffect(() => {
        GetSessions(props.httpClient).then((data) => {
            setSessionItems(data);
        });
    }, []);

    const addSession = (data: ISession) => {
        setSessionItems([...sessionItems, data]);
    };
    const deleteSession = (data: ISession) => {
        setSessionItems([...sessionItems.filter(el => el.title != data.title && el.speaker != data.title)]);
    };

    return (
        <GlobalContext.Provider value={{ sessionItems, addSession, deleteSession}}>
            <div className="ms-Grid-row">
                <h1>Session list Microsoft Virtual Marathon - demo</h1>
            </div>
            <div className="ms-Grid-row">
                <SessionList />
            </div>
            <div className="ms-Grid-row">
                <Form />
            </div>
        </GlobalContext.Provider>

    );
};

