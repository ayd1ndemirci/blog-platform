import blogJson from '../../../app/blogs.json';
import { notFound } from 'next/navigation';
import UpdateView from '@/app/components/UpdateView';

export async function generateStaticParams() {
    const blogs = blogJson.blogs;
    return blogs.map(blog => ({
        id: blog.id.toString()
    }));
}

export default async function BlogPage({ params }) {
    const blogId = parseInt(params.id, 10);
    const blog = blogJson.blogs.find(blog => blog.id === blogId);
    if (!blog) {
        notFound();
    }

    return (
        <div className='blog-page'>
            <h1>{blog.title}</h1>
            <p className='date'>{blog.date}</p>
            <div className='content'>{blog.content}</div>
            <p className='author'>Yazar: <a href={`https://github.com/${blog.author}`} target='blank'>{blog.author}</a></p>
            <p className='views'>Okuma Sayısı: {blog.views}</p>
            <UpdateView blogId={blogId} />
            <a href={`/`} className='update-button'>Geri Dön</a>
        </div>
    );
}
