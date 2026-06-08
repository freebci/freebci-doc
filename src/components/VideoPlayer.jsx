import React from 'react';
import clsx from 'clsx';

export default function VideoPlayer({ src, mobile, className, ...rest }) {
  return (
    <video
      className={clsx(className, mobile && 'mobile')}
      src={src}
      autoPlay
      loop
      controls={false}
      muted
      {...rest}
    />
  );
}
