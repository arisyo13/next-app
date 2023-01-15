import SinglePost, { Project, SlugType } from '../../components/SinglePost';

export async function getServerSideProps(context: { params: { slug: SlugType }}): Promise<{ props: { project: Project } }> {
  const projects: Project[] = [
    { name: 'Alaaarm', image: '/assets/arrow.png', slug: 'fire' },
    { name: 'Fire', image: '/assets/arrow.png', slug: 'fire' }
  ];
  const project: Project | undefined = projects.find(item => item.slug === context.params?.slug);
  const error: Project = { name: 'error', slug: context.params?.slug, image: undefined };

  return { props: { project: project || error } };
}

export default SinglePost
