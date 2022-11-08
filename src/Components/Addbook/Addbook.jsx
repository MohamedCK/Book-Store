import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './Addbook.module.css';

function Addbook() {
  const authorRef = useRef(bookObj);
  const titleRef = useRef(bookObj);
  const dispatch = useDispatch();

  const [bookObj, setBookObj] = useState({
    id: null,
    title: null,
    author: null,
  });

  const addBookHandler = (added) => {
    added.preventDefault();
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const id = uuidv4();
    setBookObj((previusState) => ({
      ...previusState,
      title,
      author,
      id,
    }));
  };

  return (
    <div className={styles.container}>
      <p className={styles.miniheader}>Add New Book</p>
      <form
        className={styles.formContainer}
        onSubmit={() => { addBookHandler(); }}
      >
        <input
          type="text"
          placeholder="Title of the book"
          className={styles.input}
          ref={titleRef}
        />
        <input
          type="text"
          placeholder="author name"
          className={styles.input}
          ref={authorRef}
        />
        <input
          type="text"
          placeholder="category"
          className={styles.input}
        />
        <button
          type="button"
          value="Add"
          label="Add"
          className={styles.addBtn}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Addbook;
