import React from 'react'
import Title from '../layouts/Title'
import { blogData } from '../../data/data';
import BlogsCard from './BlogsCard';

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Available to read on Medium"
          des="Blogs"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {blogData.map((blog, index) => {
          console.log(Object.values(blog.src)[0])
          return (
            <BlogsCard
              title={blog.title}
              desc={blog.desc}
              src={Object.values(blog.src)[0]}
              githubLink={blog.githubLink}
              websiteLink={blog.websiteLink}
              key={index}
            />
          )
        })}
      </div>
    </section>
  );
}

export default Blogs