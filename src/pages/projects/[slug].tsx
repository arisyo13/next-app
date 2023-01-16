import SinglePost, { Project, SlugType } from '../../components/SinglePost';
import fireProject from '../../../public/assets/projects/fire-project.png';

const projects: Project[] = [
  { name: 'Alaaarm', slug: 'fire', image: fireProject },
  { name: 'Cinema', slug: 'cinema', image: fireProject },
  { name: 'Pizza', slug: 'pizza', image: fireProject },
];

export async function getStaticPaths(context: { params: { projects: Project[] } }) {
  const paths = projects.map((post) => ({
    params: { slug: post.slug },
  }));

  console.log({ paths: paths[0].params }, context);

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: { params: { slug: SlugType }}): Promise<{ props: { project: Project } }> {
  const project: Project | undefined = projects.find(item => item.slug === context.params?.slug);
  const error: Project = { name: 'error', slug: context.params?.slug, image: fireProject };

  return { props: { project: project || error } };
}

export default SinglePost;
