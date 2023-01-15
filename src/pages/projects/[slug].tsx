import React, { FC } from 'react';

import Container from '../../components/Container';
import FireAlarm from '../../components/FireAlarm';

type SlugType = 'fire' | 'cinema' | 'pizza';

interface Project {
  name: string;
  image: string;
  slug: SlugType;
}

interface ProjectProps {
  project: Project
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

export async function getServerSideProps(context: { params: { slug: SlugType }}): Promise<{ props: ProjectProps }> {
  const projects: Project[] = [
    { name: 'Alaaarm', image: '/assets/arrow.png', slug: 'fire' },
    { name: 'Fire', image: '/assets/arrow.png', slug: 'fire' }
  ];
  const project: Project | undefined = projects.find(item => item.slug === context.params?.slug);
  const error = { name: 'error', slug: context.params?.slug, image: 'd' };

  return { props: { project: project || error } };
}

export default SinglePost;
