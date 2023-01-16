import React from 'react';
import type { NextPage } from 'next';

import ProjectContainer from '../../components/ProjectContainer';
import { Project } from '../../components/SinglePost';
import fireProject from '../../../public/assets/projects/fire-project.png';

const projects: Project[] = [
  { name: 'Alaaarm', slug: 'fire', image: fireProject },
  { name: 'Cinema', slug: 'cinema', image: fireProject },
  { name: 'Pizza', slug: 'cinema', image: fireProject },
];

const Projects: NextPage<{ projects: Project[] }> = ({ projects }) => {
  return (
    <ProjectContainer projects={projects} />
  );
};

export async function getStaticProps(): Promise<{ props: { projects: Project[] } }> {
  return { props: { projects } };
}

export default Projects;
