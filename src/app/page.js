import Link from 'next/link';
import blogJson from '../app/blogs.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const blogs = blogJson.blogs;

  return (
    <div className='title'>
      <h1>Blog Sayfası</h1>
      <div className='blogs'>
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <div className='blog-item'>
              <h2>{blog.title}</h2>
              <p className='date'>
              <FontAwesomeIcon icon={faCalendarDay} style={{witdh: '80px'}, {height: '20px'}}/>
                {blog.date}
              </p>
              <p>{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
