import React from 'react';
import { CaseStudyTemplate } from '../../templates/case-study';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <CaseStudyTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default CaseStudyPreview;
