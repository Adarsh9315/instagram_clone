import Post from "./Post";

interface PostsProps {
    children?: React.ReactNode;
}

const posts = [
    {
        id: 1,
        username: "Adarsh",
        userImg: "https://leaguesofgames.com/assets/img/adarsh.jpeg",
        img: "https://leaguesofgames.com/assets/img/adarsh.jpeg",
        caption: "Hello World"
    },
    {
        id: 2,
        username: "Adarsh",
        userImg: "https://leaguesofgames.com/assets/img/adarsh.jpeg",
        img: "https://leaguesofgames.com/assets/img/adarsh.jpeg",
        caption: "Hello World"
    },
    {
        id: 3,
        username: "Adarsh",
        userImg: "https://leaguesofgames.com/assets/img/adarsh.jpeg",
        img: "https://leaguesofgames.com/assets/img/adarsh.jpeg",
        caption: "Hello World"
    },
    {
        id: 4,
        username: "Adarsh",
        userImg: "https://leaguesofgames.com/assets/img/adarsh.jpeg",
        img: "https://leaguesofgames.com/assets/img/adarsh.jpeg",
        caption: "Hello World"
    }
]

const Posts: React.FC<PostsProps> = (props) => {
    return (
        <div className="">
             {posts.map(post => (
                 <Post key={post.id} id={post.id} userImg={post.userImg} username={post.username} caption={post.caption} img={post.img}></Post>
             ))}
        </div>
    )
}

export default Posts
