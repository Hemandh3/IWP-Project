import React from 'react'
import markdownit from 'markdown-it';
import { useLocation } from "react-router-dom";

const md = markdownit();

export default function ResultPage() {
    const location = useLocation();
    const data = location.state;
    console.log(data.name);
  //CONTENT IS IN data.content
  return (
    <div className="p-10 bg-white rounded shadow-xl m-16">
      <h1 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
        Here is your resume:
      </h1>
      <div dangerouslySetInnerHTML={{ __html: md.render(data) }} />
    </div>
  );
}
