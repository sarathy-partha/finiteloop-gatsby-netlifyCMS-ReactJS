import React from 'react';
import { TeamsPageTemplate } from '../../templates/teams-page';

const TeamsPagePreview = ({ entry, widgetFor }) => (
  <TeamsPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

export default TeamsPagePreview;
