import * as React from 'react';
import {
    TextField,
    Button,
    ButtonType
} from 'office-ui-fabric-react';
import { useContext } from 'react';
import { GlobalContext } from '../container/Container';

export interface IFormProps {

}

export interface IFormState {
    title: string;
    speaker: string;
}

export const Form = () => {
    const { sessionItems, addSession } = useContext(GlobalContext);

    const [title, setTitle] = React.useState("");
    const [speaker, setSpeaker] = React.useState("");
    return (

        <div className="ms-Grid" dir="ltr" >
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                    <TextField
                        value={title}
                        autoComplete='off'
                        onChanged={(newValue) => { setTitle(newValue); }}
                        placeholder="Add a new session title"
                    /></div>
                <div className="ms-Grid-col ms-sm4 ms-md3 ms-lg4">
                    <TextField
                        value={speaker}
                        autoComplete='off'
                        onChanged={(newValue) => { setSpeaker(newValue); }}
                        placeholder="Add a new speaker"
                    /></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1 ms-md1 ms-lg1">
                    <Button
                        buttonType={ButtonType.primary}
                        ariaLabel='Add a todo task'
                        onClick={() => {
                            addSession({ title: title, speaker: speaker });
                        }}>
                        Add
                        </Button>
                </div>
            </div>

        </div >

    );
};