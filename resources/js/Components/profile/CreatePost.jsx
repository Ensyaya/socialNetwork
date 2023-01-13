import React from "react";
import CrateCommentModal from "./CrateCommentModal";

export default function CreatePost({ auth }) {
    const [showPostModal, setShowPostModal] = React.useState(false);

    const openModal = () => {
        setShowPostModal(true);
    };

    return (
        <div>
            {/* ADD POST */}
            <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
                <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">
                    <img
                        src={auth.user.image}
                        alt="Profile picture"
                        className="w-10 h-10 rounded-full"
                    />
                    <div
                        onClick={openModal}
                        className="flex-1 hover:bg-slate-200 hover:rounded-full bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt"
                    >
                        <span>What's on your mind, Can ?</span>
                    </div>
                </div>
                {showPostModal && (
                    <CrateCommentModal
                    setShowPostModal={setShowPostModal}
                    />
                )}
                <div className="p-2 flex">
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
                            Post
                        </span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
                            Photo
                        </span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
                            Life Event
                        </span>
                    </div>
                </div>
            </div>
            {/* END ADD POST */}
        </div>
    );
}
