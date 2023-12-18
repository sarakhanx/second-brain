import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div
      className={`${markdownStyles['markdown-body']}bg-slate-900`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PostBody
