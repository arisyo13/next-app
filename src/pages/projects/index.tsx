import React from 'react';
import type { NextPage } from 'next';

import ProjectContainer, { ProjectContainerProps } from '../../components/ProjectContainer';
import { Project } from '../../components/SinglePost';
import fireProject from '../../../public/assets/projects/fire-project.png';

const projects: Project[] = [
  { name: 'Alaaarm', slug: 'fire', image: fireProject },
  { name: 'Cinema', slug: 'cinema', image: fireProject },
  { name: 'Pizza', slug: 'cinema', image: fireProject },
];

const Projects: NextPage<ProjectContainerProps> = ({ projects }) => {
  return (
    <ProjectContainer projects={projects} />
  );
};

export async function getStaticProps(): Promise<{ props: ProjectContainerProps }> {
  return { props: { projects } };
}

export default Projects;
