import {
    DotsHorizontalIcon,
    ChatIcon,
    PaperAirplaneIcon,
    BookmarkIcon,
    EmojiHappyIcon,
    HeartIcon
} from "@heroicons/react/outline"

import {
    HeartIcon as HearIconFilled,
} from "@heroicons/react/solid"
import { addDoc, collection, onSnapshot, serverTimestamp, query, orderBy, setDoc, doc, deleteDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase"
import Moment from 'react-moment'

interface PostsProps {
    id: string,
    username: string,
    userImg: string,
    img: string,
    caption: string,
    children?: React.ReactNode;
}

const Post: React.FC<PostsProps> = (props) => {
    console.log(props)
    const { data: session } = useSession()
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])
    const [hasLiked, setHaseLiked] = useState(false)

    useEffect(() => onSnapshot(query(collection(db, 'posts', props.id, 'comments'), orderBy('timestamp', 'desc')), (snapshot: any) => {
        setComments(snapshot.docs)
    }), [db, props.id])

    useEffect(() => onSnapshot((collection(db, 'posts', props.id, 'likes')), (snapshot: any) => {
        setLikes(snapshot.docs)
    }), [db, props.id])

    useEffect(() =>
        setHaseLiked(likes.findIndex((like) => like.id === session?.user?.uid) !== -1)
        , [likes])

    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', props.id, 'likes', session.user.uid))
        } else {
            await setDoc(doc(db, 'posts', props.id, 'likes', session.user.uid), {
                username: session.user.username
            })
        }
    }

    const sendComment = async (e: any) => {
        e.preventDefault()

        const commentToSend = comment
        setComment('')

        await addDoc(collection(db, 'posts', props.id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        })
    }

    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img src={props.userImg} alt="" className="rounded-full h-12 w-12 object-contain p-1 mr-3" />
                <p className="flex-1 font-bold">{props.username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/* Img */}
            <img src={props.img} alt="" className="object-cover w-full" />

            {/* Buttons */}
            <div className="flex justify-between">
                <div className="flex space-x-4">
                    {hasLiked ? (
                        <HearIconFilled className="btn text-red-500" onClick={likePost} />
                    ) : (
                        <HeartIcon className="btn" onClick={likePost} />
                    )}
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn" />
                </div>
                <BookmarkIcon className="btn" />
            </div>

            {/* Captions */}
            <p className="p-5 truncate">
                {likes.length > 0 && (
                    <p className="font-bold mb-1">{likes.length} likes</p>
                )}
                <span className="font-bold mr-1">{props.username}</span>
                {props.caption}
            </p>

            {/* Comments */}
            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map(comment => (
                        <div key={comment.id} className="flex items-center space-x-2 mb-3">
                            <img src={comment.data().userImage} alt="" className="h-7 rounded-full" />
                            <p className="text-sm flex-1"><span className="font-bold">{comment.data().username}</span>
                                {" "}
                                {comment.data().comment}</p>

                            <Moment fromNow className="pr-5 text-xs">
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}

            {/* Input Box */}
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7" />
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment..." className="border-none flex-1 focus:ring-0 outline-none" />
                <button type="submit" disabled={!comment.trim()} onClick={(e) => sendComment(e)}>Post</button>
            </form>
        </div>
    )
}

export default Post
