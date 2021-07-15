import { PostComponent } from "../components/post";
import { getAllPosts } from "../lib/api";
import Container from "../components/container";
import Head from "next/head";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Post from "../types/post";
import markdownToHtml from "../lib/markdownToHtml";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => (
  <>
    <Layout>
      <Head>
        <title>Gavin Harris</title>
      </Head>
      <Container>
        <Intro />
        {allPosts.map((post) => (
          <PostComponent
            index={0}
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            startDate={post.startDate}
            endDate={post.endDate}
            summary={post.summary}
            slug={post.slug}
          />
        ))}
      </Container>
    </Layout>
  </>
);

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "startDate",
    "endDate",
    "slug",
    "author",
    "coverImage",
    "summary",
    "detail",
  ]);

  return {
    props: {
      allPosts: allPosts.map((post) => ({
        ...post,
        summary: markdownToHtml(post.summary),
        detail: markdownToHtml(post.detail || ""),
      })),
    },
  };
};
