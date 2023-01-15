import { FC } from 'react';

import Container from './Container';
import FireAlarm from './FireAlarm';

export type SlugType = 'fire' | 'cinema' | 'pizza';

export interface Project {
  name: string;
  image?: string;
  slug: SlugType
}

interface ProjectProps {
    project?: Project
  }

const SinglePost: FC<ProjectProps> = ({ project }) => {
  if (!project){
    return null;
  }

  switch (project.slug) {
    case 'fire':
      return <Container><FireAlarm /></Container>;
    case 'cinema':
      return <Container><h1>Cinema</h1></Container>;
    case 'pizza':
      return <Container><h1>Pizza Napoli test</h1></Container>;
    default:
      break;
  }

  const { name } = project;

  return (
    <div className="p-20">{name}</div>
  );
};

export default SinglePost;
