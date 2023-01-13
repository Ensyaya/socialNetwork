import React from "react";
import Moment from "moment";
import Dropdown from "../Dropdown";
import { useForm } from "@inertiajs/inertia-react";
import UpdatePostModal from "./UpdatePostModal";

export default function Post({ auth, post }) {
    const [showUpdatePostModal, setShowUpdatePostModal] = React.useState(false);

    const openModal = () => {
        setShowUpdatePostModal(true);
    };

    const { delete: destroy, errors } = useForm();

    const deletePost = (e, id = post.id) => {
        e.preventDefault();

        destroy(route("post.deletePost", id), {
            preserveScroll: true,
        });
    };

    return (
        <div>
            {/* // POST */}
            <div className="shadow bg-white mt-4 rounded-lg h-max">
                {/* POST AUTHOR */}
                <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex space-x-2 items-center">
                        <div className="relative">
                            <img
                                src={auth.user.image}
                                alt="Profile picture"
                                className="w-10 h-10 rounded-full"
                            />
                            <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <div className="font-semibold">
                                {auth.user.name}
                            </div>
                            <span className="text-sm text-gray-500">
                                {Moment(post.created_at).format(
                                    "DD.MMM.YYYY H:mm"
                                )}
                            </span>
                        </div>
                    </div>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 rounded-full cursor-pointer">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <form onSubmit={deletePost}>
                                <button
                                    type="submit"
                                    className="block w-full px-4 py-2 text-left leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                >
                                    <i className="fa-solid fa-trash mr-2"></i>
                                    Delete
                                </button>
                            </form>
                            <button
                                onClick={openModal}
                                className="block w-full px-4 py-2 text-left leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                            >
                                <i className="fa-solid fa-pen-to-square mr-2"></i>
                                Update
                            </button>
                        </Dropdown.Content>
                    </Dropdown>
                    {showUpdatePostModal && (
                        <UpdatePostModal
                            setShowUpdatePostModal={setShowUpdatePostModal}
                            post={post}
                        />
                    )}
                </div>
                {/* END POST AUTHOR */}

                {/* POST CONTENT */}
                <div className="text-justify px-4 py-2">
                    <p>{post.post_content}</p>
                </div>
                {post.post_image && (
                    <div className="text-justify px-4 py-2">
                        <img src={post.post_image} alt={auth.user.name} />
                    </div>
                )}

                {/* END POST CONTENT */}
                {/* POST EVENTS */}
                <div className="px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-row-reverse items-center">
                            <span className="ml-2 text-gray-500">55</span>
                        </div>
                        <div className="text-gray-500">
                            <span style={{ cursor: "pointer" }}>
                                10 comments
                            </span>
                        </div>
                    </div>
                </div>
                {/* END POST EVENTS */}

                {/* POST ACTION */}
                <div className="py-2 px-4">
                    <div className="border border-gray-200 border-l-0 border-r-0 py-1">
                        <div className="flex space-x-2">
                            <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 text-xl py-2 rounded-lg cursor-pointer text-gray-500">
                                <span className="font-semibold">
                                    <i className="fa-solid fa-thumbs-up"></i>
                                </span>
                            </div>
                            <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 text-xl py-2 rounded-lg cursor-pointer text-gray-500">
                                <span className="font-semibold">
                                    <i className="fa-solid fa-comment"></i>
                                </span>
                            </div>
                            <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 text-xl py-2 rounded-lg cursor-pointer text-gray-500">
                                <i className="bx bx-share bx-flip-horizontal"></i>
                                <span className="font-semibold">
                                    <i className="fa-solid fa-share-from-square"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END POST ACTION */}
            </div>
            {/* // END POST */}
        </div>
    );
}
