import React from 'react'
import Blog_sectiov from './blog_sectiov'
import Navigator from '../../_components/navigator/navigator'
import St from '../../_components/st';

export default async function page() {


  const url = `${process.env.API_HOST}Blogs`;

  const response = await fetch(url,
    {
      method: 'GET',
      headers: { St: St(), 'Cache-Control': 'no-cache' },
      cache: 'no-store'
    });

  if (!response.ok) { throw new Error('Network response was not ok'); }
  const BlogsPageData = await response.json();


  return (
    <section>

      <Navigator title={"المدونة"} target={"/ المدونة"} />

      <div className='flex mt-5 flex-col gap-5'>
        {BlogsPageData.map((Blog, index) => (
          <div key={Blog.id}><Blog_sectiov info={Blog} /></div>
        ))}


      </div>

    </section>
  )
}
