import React from 'react'
import Blog_sectiov from './blog_sectiov'
import Navigator from '../../_components/navigator/navigator'

export default function page() {
  return (
    <section>

      <Navigator title={"المدونة"} target={"/ المدونة"} />

        <div className='flex mt-5 flex-col gap-5'>
          <Blog_sectiov />
          <Blog_sectiov />
          <Blog_sectiov />
          <Blog_sectiov />
        </div>

    </section>
  )
}
