import React from 'react';

import imagePlaceholder from 'assets/images/imagePlaceholder.png';

export const Image = React.memo(({ src, alt, ...rest }) => {
  return <img src={src || imagePlaceholder} alt={alt} width="100%" height="100%" {...rest} />;
});
