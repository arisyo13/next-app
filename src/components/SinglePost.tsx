import { StaticImageData } from 'next/image';
import React, { FC } from 'react';

import Container from './Container';
import FireAlarm from './FireAlarm';

export type SlugType = 'fire' | 'cinema' | 'pizza';

export interface Project {
  name: string;
  image: StaticImageData;
  slug: SlugType
}

interface ProjectProps {
    project: Project
  }

const SinglePost: FC<ProjectProps> = ({ project }) => {
  console.log('ever hereee', project);
  switch (project.slug) {
    case 'fire':
      return <Container><FireAlarm /></Container>;
    case 'cinema':
      return <Container><h1>{project.name}</h1></Container>;
    case 'pizza':
      return <Container><h1>{project.name}</h1></Container>;
    default:
      return <Container><h1>{project.name}</h1></Container>;
  }
};

export default SinglePost;
