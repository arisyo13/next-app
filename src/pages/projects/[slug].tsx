import SinglePost, { Project, SlugType } from '../../components/SinglePost';

const projects: Project[] = [
  { name: 'Alaaarm', slug: 'fire' },
  { name: 'Cinema', slug: 'cinema' }
];

export async function getStaticPaths() {
  const paths = projects.map((post) => ({
    params: { slug: post.slug },
  }));

  console.log({ paths })

  return {
    paths,
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: { params: { slug: SlugType }}): Promise<{ props: { project: Project } }> {
  const project: Project | undefined = projects.find(item => item.slug === context.params?.slug);
  const error: Project = { name: 'error', slug: context.params?.slug };

  return { props: { project: project || error } };
}

export default SinglePost;
