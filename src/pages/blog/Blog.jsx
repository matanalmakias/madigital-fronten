import React from "react";
import "./style.scss";
import { useState } from "react";
const blogList = [
  {
    id: 1,
    title: "10 Tips for Effective Time Management",
    author: "John Smith",
    date: "April 20, 2023",
    image: "https://example.com/images/time-management.jpg",
    description:
      "In this blog post, we will discuss 10 tips for effective time management that you can implement in your daily life to improve your productivity and achieve your goals.",
    category: "Productivity",
    tags: ["time management", "productivity", "goal setting"],
    content:
      "<p>Are you struggling to manage your time effectively? Do you find yourself constantly feeling overwhelmed and stressed out by your never-ending to-do list? If so, you're not alone. Time management is a common problem for many people, but the good news is that it's a skill that can be learned and improved.</p><p>In this blog post, we will discuss 10 tips for effective time management that you can implement in your daily life to improve your productivity and achieve your goals. These tips are practical and easy to implement, and they will help you get more done in less time.</p><ol><li>Make a to-do list</li><li>Prioritize your tasks</li><li>Eliminate distractions</li><li>Use a timer</li><li>Take breaks</li><li>Delegate tasks</li><li>Learn to say no</li><li>Don't procrastinate</li><li>Get enough sleep</li><li>Stay organized</li></ol><p>By following these tips, you'll be able to manage your time more effectively, reduce your stress levels, and achieve your goals more easily. So why not give them a try today?</p>",
    comments: [
      {
        id: 1,
        author: "Mary Jones",
        date: "April 21, 2023",
        content: "Great tips! I will definitely try them out.",
      },
      {
        id: 2,
        author: "David Lee",
        date: "April 22, 2023",
        content:
          "Thanks for sharing these tips! I've been struggling with time management for a while, and I think these tips will really help me.",
      },
    ],
  },
  {
    id: 2,
    title: "Introduction to ReactJS",
    author: "John Smith",
    date: "April 20, 2023",
    image: "https://example.com/images/reactjs.jpg",
    description:
      "In this blog post, we will introduce you to ReactJS and explain why it has become one of the most popular front-end frameworks in the industry.",
    category: "ReactJS",
    tags: ["ReactJS", "JavaScript", "Front-End Development"],
    content:
      "<p>ReactJS is a JavaScript library for building user interfaces. It was created by Facebook and has become one of the most popular front-end frameworks in the industry. One of the key features of React is its ability to create reusable components, which makes it easier to manage complex UIs.</p><p>In this blog post, we will introduce you to ReactJS and explain why it has become so popular. We'll also walk you through some basic concepts and show you how to get started with building your own React components.</p><ol><li>What is ReactJS?</li><li>Why Use ReactJS?</li><li>Getting Started with ReactJS</li><li>Building Your First React Component</li><li>Advanced React Concepts</li></ol><p>By the end of this blog post, you'll have a solid understanding of ReactJS and be ready to start building your own front-end applications using this powerful framework.</p>",
    comments: [
      {
        id: 1,
        author: "Mary Jones",
        date: "April 21, 2023",
        content: "Thanks for this great introduction to ReactJS!",
      },
      {
        id: 2,
        author: "David Lee",
        date: "April 22, 2023",
        content:
          "This is really helpful for someone just starting out with React. Thanks for sharing!",
      },
    ],
  },
];
const Blog = () => {
  return (
    <div>
      <div>
        <BlogList />
      </div>
    </div>
  );
};

const BlogList = () => {
  return (
    <>
      {blogList.map((item, index) => (
        <BlogItem key={item.id} item={item} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const [showContent, setShowContent] = useState(false);
  const htmlString = item.content;

  return (
    <div className="background3 p-1">
      <div className="background4  p-2 mb-1 justify-content-center text-center">
        <div className="col">
          <p className="heading1 ">{item.title}</p>
        </div>
        <div className="col">
          <p className="p4 fs2 p-3">{item.description}</p>
        </div>
        <button onClick={() => setShowContent((s) => !s)} className="btn8">
          {showContent ? "Show less" : " Read more"}
        </button>
      </div>
      {showContent && (
        <>
          <div className="col">
            <p
              dangerouslySetInnerHTML={{ __html: item.content }}
              className="p4 p-3"
            ></p>
          </div>

          <div className="background4 row p-1  justify-content-center text-center">
            <div className="col">
              <p className="label3">Author:</p>
              <p className="p4">{item.author}</p>
            </div>
            <div className="col">
              <p className="label3">Category: </p>
              <p className="p4">{item.category}</p>
            </div>
            <div className="col">
              <p className="label3">Date:</p>
              <p className="p4">{item.date}</p>
            </div>
            <div className="col">
              <p className="label3">Tags: </p>
              <p className="p4">
                {item.tags.map((item, index) => (
                  <p key={index} className="mb-1 ">
                    {item} {` `}
                  </p>
                ))}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Blog;
