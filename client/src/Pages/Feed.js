


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import io from 'socket.io-client';

// const PostForm = ({ onSubmit }) => {
//   const [content, setContent] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (content.trim() !== '') {
//       onSubmit(content);
//       setContent('');
//     }
//   };

//   return (
//     <div className="mb-4   mr-8">
//       <textarea
//         className="w-full px-3 py-2 border rounded-md resize-none"
//         rows={4}
//         placeholder="Write your post..."
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="px-4 py-2 mt-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
//         onClick={handleSubmit}
//       >
//         Post
//       </button>
//     </div>
//   );
// };











// const ProfileInfo = () => {
//   const [userData, setUserData] = useState(null);
//   const userId = Number(sessionStorage.getItem('userId')); // Convert to a number

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/login`);
//         const data = response.data;

//         // Set the user data in the state
//         setUserData(data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     // Call the fetchUserData function
//     fetchUserData();
//   }, []);

//   if (!userData) {
//     return <div>Loading profile information...</div>;
//   }

//   // Find the user with matching ID in the userData
//   const user = userData.find((item) => item.id === userId);

//   if (!user) {
//     return <div>User not found.</div>;
//   }

//   return (
//     <div>
//       <div className="bg-blue-950  p-10 mr-8 mb-4 rounded-3xl" key={user.id}>
//         <h2 className="text-4xl text-white font-semibold mb-4">Profile</h2>
//         <p className='text-gray-400 text-2xl'> {user.firstName} {user.lastName}</p>
//         <p className='text-gray-400  text-2xl'>{user.email}</p>
//       </div>
//     </div>
//   );
// };




// const PostList = ({ posts }) => {
//   const reversedPosts = [...posts].reverse();

//   return (
//     <div>
//       {reversedPosts.map((post) => (
//         <div key={post.id} className="p-4 mb-4 border rounded-md">
//           <p className="mb-2">{post.description}</p>
//           <hr className="my-2" />
//         </div>
//       ))}
//     </div>
//   );
// };

// const HomePage = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch posts data from the backend
//     axios
//       .get('http://localhost:5000/feedget')
//       .then((response) => {
//         setPosts(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching posts:', error);
//       });
//   }, []);

//   const handlePostSubmit = (content) => {
//     const postData = {
//       description: content,
//       user_id: sessionStorage.getItem('userId'),
//     };

//     // Create the new post
//     axios
//       .post('http://localhost:5000/feedpost', postData)
//       .then((response) => {
//         console.log('Post created:', response.data);
//         // Fetch the updated posts after creating the new post
//         axios
//           .get('http://localhost:5000/feedget')
//           .then((response) => {
//             setPosts(response.data);
//           })
//           .catch((error) => {
//             console.error('Error fetching posts:', error);
//           });
//       })
//       .catch((error) => {
//         console.error('Error creating post:', error);
//       });
//   };

//   return (
//     <div className="container   mx-auto mt-8">
//       <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
//         <div>
//           <h1 className="text-2xl font-bold mb-4 text-blue-500">My Life Posts</h1>
//           <PostList posts={posts} />
//         </div>
//         <div>
//           <ProfileInfo />
//           <PostForm onSubmit={handlePostSubmit} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const PostForm = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== '') {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <div className="mb-4   mr-8">
      <textarea
        className="w-full px-3 py-2 border rounded-md resize-none"
        rows={4}
        placeholder="Write your post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 mt-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Post
      </button>
    </div>
  );
};

const ProfileInfo = ({ user }) => {
  if (!user) {
    return <div>Loading profile information...</div>;
  }

  return (
    <div>
      <div className="bg-blue-950  p-10 mr-8 mb-4 rounded-3xl" key={user.id}>
        <h2 className="text-4xl text-white font-semibold mb-4">Profile</h2>
        <p className="text-gray-400 text-2xl">
          {user.firstName} {user.lastName}
        </p>
        <p className="text-gray-400 text-2xl">{user.email}</p>
      </div>
    </div>
  );
};

const PostList = ({ posts }) => {
  const reversedPosts = [...posts].reverse();

  return (
    <div>
      {reversedPosts.map((post) => (
        <div key={post.id} className="p-2 mb-4 border rounded-md">
          <p className="mb-2">{post.description}</p>
          <hr className="my-2" />
        </div>
      ))}
    </div>
  );
};

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Fetch posts data from the backend
    axios
      .get('http://localhost:5000/feedget')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });

    // Set up Socket.io connection
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    // Fetch user data from the backend
    axios
      .get('http://localhost:5000/login')
      .then((response) => {
        const userId = Number(sessionStorage.getItem('userId'));
        const user = response.data.find((item) => item.id === userId);
        setUser(user);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    // Clean up the socket connection and event listeners on component unmount
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  const handlePostSubmit = (content) => {
    const postData = {
      description: content,
      user_id: sessionStorage.getItem('userId'),
    };

    // Create the new post
    axios
      .post('http://localhost:5000/feedpost', postData)
      .then((response) => {
        console.log('Post created:', response.data);
        // Fetch the updated posts after creating the new post
        axios
          .get('http://localhost:5000/feedget')
          .then((response) => {
            setPosts(response.data);
          })
          .catch((error) => {
            console.error('Error fetching posts:', error);
          });
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  };

  return (
    
    <div className="container mx-auto mt-8 p-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold mb-4 text-blue-500">Posts</h1>
          <br />

          <PostList posts={posts} />
        </div>
        <div>
          <ProfileInfo user={user} />
          <PostForm onSubmit={handlePostSubmit} />
        </div>
      </div>
    </div>
  );
};



  





export default HomePage;

