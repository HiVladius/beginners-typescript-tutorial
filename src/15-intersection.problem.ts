

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
  age: number;
}

type UserAndPost = User & { posts: Post[] } ;


/**
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }
 */
// export const getDefaultUserAndPosts = ():   => {
  export const getDefaultUserAndPosts = (): UserAndPost => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
        age: 10,
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
