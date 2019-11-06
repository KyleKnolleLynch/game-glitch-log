import React, { useContext } from 'react';
import { LogContext } from '../../context/LogContext';
import { ThemeContext } from '../../context/ThemeContext';

const PostForm = () => {
  const { logs, addLog, removeLog } = useContext(LogContext);
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className='container'
      style={{ background: theme.bg, color: theme.syntax, paddingTop: '3rem' }}
    >
      <form className='post-form ttc'>
        <h2 className='center'>post glitch or method</h2>
        <div className='form-group my-1'>
          <input type='text' id='author' className='form-text' />
          <label htmlFor='author'>author</label>
        </div>
        <div className='form-group my-1'>
          <input type='text' id='title' className='form-text' />
          <label htmlFor='title'>title</label>
        </div>
        <div className='form-group my-1'>
          <textarea type='text' id='details' className='form-text' />
          <label htmlFor='details'>details</label>
        </div>
        <button
          className='btn'
          style={{ background: theme.syntax, color: theme.bg }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
