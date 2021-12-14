import React from 'react'
import Reactmarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import slug from 'rehype-slug'
import {PrismAsyncLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism/'
import {LwdLink} from './page/link'

export const MarkdownArticle = ({article, className}) => {
    return (
        <Reactmarkdown 
            children={article} 
            linkTarget="_black"
            className={className}
            transformImageUri={uri => 
                uri.startsWith("http") ? uri : `${process.env.GATSBY_STRAPI_API_URL}${uri}`}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[slug,rehypeRaw]}
            components={
            {
                code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={materialDark}
                    showLineNumbers={true}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                    />
                ) : (
                    <code className={className} {...props}>
                    {children}
                    </code>
                )
                },
                a ({node, className, children, ...props}) {
                return (
                    <LwdLink LinkTo={props.href} className={className} {...props}>{children}</LwdLink>
                )
                },
                iframe ({node, children, ...props}) {
                return (
                    <div className="embed-video">
                        <iframe {...props} loading="lazy">{children}</iframe>
                    </div>
                )
                },
            }
            }
        />
    )
}