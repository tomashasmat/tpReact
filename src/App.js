/*Proyecta hecho por: Amodeo, Luca - Impembo, Nicolas - Hasmat, Tomas */

import React, { useState, useEffect } from 'react';
import './styles.css';
import logo from "./imagenes/logo.png";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newComment, setNewComment] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const addPost = () => {
    if (newPost.trim() !== '') {
      const updatedPosts = [...posts, { text: newPost, comments: [] }];
      setPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      setNewPost('');
    }
  };

  const deletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const addComment = () => {
    if (newComment.trim() !== '' && selectedPost !== null) {
      const updatedPosts = [...posts];
      updatedPosts[selectedPost].comments.push(newComment);
      setPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      setNewComment('');
    }
  };

  const deleteComment = (postIndex, commentIndex) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].comments.splice(commentIndex, 1);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const selectPost = (index) => {
    setSelectedPost(index);
  };

  return (
    <div class="container">
      <h1>Bienvenidos</h1>
      <div>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Escribe un nuevo post"
        />
        <button onClick={addPost}>Agregar post</button>
      </div>
      <div className="icon-container">
  <img src={logo} alt="Icono" />
</div>

      <ul>
        {posts.map((post, index) => (
          <div key={index}>
            <li>
              {post.text}
              <button onClick={() => deletePost(index)}>Borrar post</button>
              <button onClick={() => selectPost(index)}>Comentar</button>
              {selectedPost === index && (
                <div>
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Escribe un comentario"
                  />
                  <button onClick={addComment}>Agregar comentario</button>
                  <ul>
                    {post.comments.map((comment, commentIndex) => (
                      <li key={commentIndex}>
                        {comment}
                        <button onClick={() => deleteComment(index, commentIndex)}>
                          Borrar comentario
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;








