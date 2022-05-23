
interface StoryProps {
    img: string;
    userName: string;
    children?: React.ReactNode;
}

const Story: React.FC<StoryProps> = (props) => {
    return (
        <div className="">
            <img src={props.img} alt="" className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" />
            <p className="text-xs w-14 truncate text-center">{props.userName}</p>
        </div>
    )
}

export default Story
