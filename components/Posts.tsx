import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase"
import { useEffect, useState } from "react";
import Post from "./Post";

interface PostsProps {
    children?: React.ReactNode;
}

const Posts: React.FC<PostsProps> = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect((() =>
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot: any) => {
            setPosts(snapshot.docs)
        })
    ), [db])
    console.log(posts)
    return (
        <div className="">
            {posts.map((post:any) => (
                <Post key={post.id} id={post.id} userImg={post.data().profileImg} username={post.data().username} caption={post.data().caption} img={post.data().image}></Post>
            ))}
        </div>
    )
}

export default Posts
