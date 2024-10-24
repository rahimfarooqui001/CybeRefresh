
import React from 'react';
import BlogComponent from '../components/BlogComponent';
import Layout from '../layout/Layout';

const Blog = () => {
  return (
   <>
   <Layout Children={<BlogComponent/>} />
   </>
  );
};

export default Blog;
