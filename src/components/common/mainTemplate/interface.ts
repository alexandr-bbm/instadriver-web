import {WithStyles} from 'material-ui';

export type IMainTemplateProps = IMainTemplateOwnProps & WithStyles<MainTemplateStyleKeys>;

export interface IMainTemplateOwnProps {}

export type MainTemplateStyleKeys
  = 'root'
  | 'content'
  ;
