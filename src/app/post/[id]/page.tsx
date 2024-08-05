import posts from '../posts.json';

type Post = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return posts;
}

export default function Post(props: Props) {
  const post = posts.find((post) => post.id === props.params.id) as Post;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
