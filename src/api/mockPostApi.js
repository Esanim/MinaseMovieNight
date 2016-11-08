import delay from './delay';
import axios from 'axios';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const posts = [
  {
    id: '1',
    date: '2016-11-11'
  },
  {
    id: '2',
    date: '2016-11-11'
  },
  {
    id: '3',
    date: '2016-11-11'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (movie) => {
  return posts.length + 1;
};

class PostApi {
  static getAllPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], posts));
      }, delay);
    });
  }

  static savePost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (post.id) {
          const existingPostIndex = posts.findIndex(a => a.id == post.id);
          posts.splice(existingPostIndex, 1, post);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          post.id = generateId(post);
          posts.push(post);
        }

        resolve(Object.assign({}, post));
      }, delay);
    });
  }

  static getPost(postId) {

  // Start with an empty profile object and build it up
  // from multiple XHR requests.
  let post = {};

  // Get the user data from our local database.
  return axios.get('http://localhost:3001/posts/' + postId)
    .then(response => {

      let res = response.data;
      post.name = res.name;
      post.twitter = res.twitter;
      post.worksOn = res.worksOn;

      return;

    });

}


}

export default PostApi;
