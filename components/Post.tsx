import {
    DotsHorizontalIcon,
    ChatIcon,
    PaperAirplaneIcon,
    BookmarkIcon,
    EmojiHappyIcon
} from "@heroicons/react/outline"

import {
    HeartIcon as HearIconFilled,
} from "@heroicons/react/solid"

interface PostsProps {
    id: number,
    username: string,
    userImg: string,
    img: string,
    caption: string,
    children?: React.ReactNode;
}

const Post: React.FC<PostsProps> = (props) => {
    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex item-center p-5">
                <img src={props.userImg} alt="" className="rounded-full h-12 w-12 object-contain p-1 mr-3" />
                <p className="flex-1 font-bold">{props.username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/* Img */}
            <img src={props.img} alt="" className="object-cover w-full" />

            {/* Buttons */}
            <div className="flex justify-between">
                <div className="flex space-x-4">
                    <HearIconFilled className="btn" />
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn" />
                </div>
                <BookmarkIcon className="btn" />
            </div>

            {/* Captions */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{props.username}</span>
                {props.caption}
            </p>

            {/* Comments */}

            {/* Input Box */}
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7"/>
                <input type="text" placeholder="Add a comment..." className="border-none flex-1 focus:ring-0 outline-none"/>
                <button>Post</button>
            </form>
        </div>
    )
}

export default Post
