import faker from '@faker-js/faker';
import React from 'react';

const CommentDetail = props => {
  return (
    <div className='comment'>
      <a
        href='/Users/tenglish/Documents/Codebase/learn-react-udemy/public'
        className='avatar'
      >
        <img
          alt='avatar'
          src={faker.image.image()}
        />
      </a>
      <div className='content'>
        <a
          href='/Users/tenglish/Documents/Codebase/learn-react-udemy/public'
          className='author'
        >
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>{props.timeAgo}</span>
        </div>
        <div className='text'>{props.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
