import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => (
  <div className='mx-8'>
    <div
      className={markdownStyles.markdown}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default PostBody;
