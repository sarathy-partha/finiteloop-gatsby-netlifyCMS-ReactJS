import CMS from 'netlify-cms'

import TeamsPagePreview from './preview-templates/TeamsPagePreview'
import CaseStudyPreview from './preview-templates/CaseStudyPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('teams', TeamsPagePreview)
CMS.registerPreviewTemplate('case-study', CaseStudyPreview)
