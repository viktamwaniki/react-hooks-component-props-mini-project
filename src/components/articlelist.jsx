
import React from 'react'
import Article from './Article'

export default function ArticleList({posts}) {

  const postElements = posts.map((proj)=>{
   return <Article key={proj.id} title = {proj.title} date={proj.date} preview ={proj.preview} minutes={proj.minutes}/>
  }
  )
  return (
    <div>
      <main>
        {postElements}
      </main>
    </div>
  )
}