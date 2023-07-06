import './App.css';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import Layout from './components/Layout';
import {Routes , Route} from 'react-router-dom'
import EditPostForm from './features/posts/EditPost';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      {/* </Route> */}
    </Routes>
  );
}

export default App;
