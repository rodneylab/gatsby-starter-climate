import React from 'react';
import PropTypes from 'prop-types';

import PureBlogPost from '../components/PureBlogPost';

export default function BlogPost({ data, children }) {
  return <PureBlogPost data={data}>{children}</PureBlogPost>;
}

BlogPost.propTypes = {
  data: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
