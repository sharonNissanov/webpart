import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={ styles.helloWorld }>
        <div className={ styles.container }>
              <span className={ styles.title }>{escape(this.props.title)}</span>
              <p className={ styles.subTitle }>{escape(this.props.description)}</p> 
              <a href="https://google.com" target="_blank" className={ styles.button }>
                <span className={ styles.label }>{escape(this.props.btn)}</span>
              </a>
        </div>
      </div>
    );
  }
}
