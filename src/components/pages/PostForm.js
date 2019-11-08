import React, { useContext, useState } from 'react';
import { LogContext } from '../../context/LogContext';
import { ThemeContext } from '../../context/ThemeContext';

const PostForm = props => {
  const { dispatch } = useContext(LogContext);
  const [game, setGame] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [details, setDetails] = useState('');
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_LOG',
      log: {
        game,
        title,
        author,
        details
      }
    });
    setGame('');
    setTitle('');
    setAuthor('');
    setDetails('');
    props.history.push('/');
  };

  return (
    <div
      className='container'
      style={{ background: theme.bg, color: theme.syntax, paddingTop: '3rem' }}
    >
      <form className='post-form ttc' onSubmit={handleSubmit}>
        <h2 className='center'>post glitch or method</h2>
        <div className='form-group my-1'>
          <input
            type='text'
            id='game'
            className='form-text'
            value={game}
            onChange={e => setGame(e.target.value)}
            required
          />
          <label htmlFor='game'>game</label>
        </div>
        <div className='form-group my-1'>
          <input
            type='text'
            id='title'
            className='form-text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <label htmlFor='title'>title</label>
        </div>
        <div className='form-group my-1'>
          <input
            type='text'
            id='author'
            className='form-text'
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
          />
          <label htmlFor='author'>author</label>
        </div>
        <div className='form-group my-1'>
          <textarea
            type='text'
            id='details'
            className='form-text'
            value={details}
            onChange={e => setDetails(e.target.value)}
            required
          />
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
