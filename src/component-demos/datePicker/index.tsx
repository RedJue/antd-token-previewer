import React from 'react';

import Default from './date-picker';
import danger from './danger';
import warning from './warning';
import icon from './icon';

import type { PreviewerDemo } from '../../interface';

const previewerDemo: PreviewerDemo = {
  default: <Default />,
  optional: [danger, warning, icon],
};

export default previewerDemo;
