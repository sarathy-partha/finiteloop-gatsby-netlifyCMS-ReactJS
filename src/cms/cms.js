import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import CaseStudyPreview from './preview-templates/CaseStudyPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('case-study', CaseStudyPreview)
