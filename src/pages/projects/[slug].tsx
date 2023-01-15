import SinglePost, { Project, SlugType } from '../../components/SinglePost';

const projects: Project[] = [
  { name: 'Alaaarm', image: '/assets/arrow.png', slug: 'fire' },
  { name: 'Cinema', image: '/assets/arrow.png', slug: 'cinema' }
];

export async function getStaticPaths() {
  const paths = projects.map((post) => ({
    params: { slug: post.slug! },
  }))
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context: { params: { slug: SlugType }}): Promise<{ props: { project: Project } }> {
  const project: Project | undefined = projects.find(item => item.slug === context.params?.slug);
  const error: Project = { name: 'error', image: undefined, slug: context.params?.slug };

  return { props: { project: project || error } };
}

export default SinglePost
