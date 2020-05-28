import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'HookExampleWpWebPartStrings';
import { IHookExampleWpProps } from './components/IHookExampleWpProps';
import HookExampleWp from './components/HookExampleWp';

export interface IHookExampleWpWebPartProps {
  description: string;
}

export default class HookExampleWpWebPart extends BaseClientSideWebPart <IHookExampleWpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHookExampleWpProps> = React.createElement(
      HookExampleWp,
      {
        description: this.properties.description,
        httpClient:this.context.httpClient
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
