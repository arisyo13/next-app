import React, { FC } from 'react';
import Image from 'next/image';

import fire from '../../public/assets/projects/fire-project.png';

const FireAlarm: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col mx-auto">
      <Image
        // className="mx-auto flex"
        src={fire}
        width={400}
        height={280}
        alt="fire-hero"
      />
      <h1>Some cool text</h1>
    </div>
  );
};

export default FireAlarm;
