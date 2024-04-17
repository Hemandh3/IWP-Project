import React, { useRef } from "react";
import markdownit from "markdown-it";
import { useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";

const md = markdownit();

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.contentWithLines }} />
    );
  }
}

export default function ResultPage() {
  const location = useLocation();
  const data = location.state;
  console.log(data.name);

  // Split the content by line and add a horizontal rule after each line
  const contentWithLines = data
    .split("//")
    .map((line) => md.render(line) + "")
    .join("");

  const componentRef = useRef();

  return (
    <div className="p-10 bg-white rounded shadow-xl m-16">
      <h1 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
        Here is your resume:
      </h1>
      <ComponentToPrint
        ref={componentRef}
        contentWithLines={contentWithLines}
      />
      <ReactToPrint
        trigger={() => (
          <button className="btn btn-primary glass mt-6">Download PDF</button>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
}
