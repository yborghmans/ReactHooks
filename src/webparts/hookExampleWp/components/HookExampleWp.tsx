import * as React from 'react';
import { IHookExampleWpProps } from './IHookExampleWpProps';
import {Container} from './container/Container';


export default class HookExampleWp extends React.Component<IHookExampleWpProps, {}> {
  
  public render(): React.ReactElement<IHookExampleWpProps> {
    return (
      <Container httpClient={this.props.httpClient}></Container>
    );
  }
}