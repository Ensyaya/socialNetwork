import UserPost from "@/Components/profile/UserPost";
import UserProfileHeader from "@/Components/profile/UserProfileHeader";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/inertia-react";

export default function UserProfile(props) {
    return (
        <MainLayout auth={props.auth} errors={props.errors}>
            <Head title={`Profile | @${props.user.username}`} />
            <div className="h-full ">
                <div className=" shadow bg-gray-50 h-full">
                    {/* PROFILE HEADER */}
                    <UserProfileHeader user={props.user} />
                    {/* END PROFILE HEADER */}

                    {/* // CONTENT */}
                    <div>
                        <div className="bg-gray-100 ">
                            <div className="md:flex justify-center h-full">
                                {/* LEFT */}
                                <div className="p-2 md:p-0">
                                    {/* // INTRO */}
                                    <div className="sm:mr-0 md:mr-2 lg:mr-12 mt-4">
                                        <div
                                            className="p-4 shadow rounded-lg bg-white md:w-80 sm:w-full"
                                            id="intro"
                                        >
                                            <h1 className="font-bold text-xl">
                                                Intro
                                            </h1>
                                        </div>
                                    </div>
                                    {/* // END INTRO */}

                                    {/* // PHOTOS */}
                                    <div className="sm:mr-0 md:mr-2 lg:mr-12 mt-4">
                                        <div
                                            className="p-4 shadow rounded-lg bg-white  md:w-80 sm:w-full"
                                            id="intro"
                                        >
                                            <div className="flex justify-between">
                                                <h1 className="font-bold text-xl">
                                                    Photos
                                                </h1>
                                                <a
                                                    href="#"
                                                    className="text-lg text-blue-700"
                                                >
                                                    See All Photos
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // END PHOTOS */}

                                    {/* // FRIENDS */}
                                    <div className="sm:mr-0 md:mr-2 lg:mr-12 mt-4">
                                        <div
                                            className="p-4 shadow rounded-lg bg-white md:w-80 sm:w-full"
                                            id="intro"
                                        >
                                            {/* Header */}
                                            <div className="flex justify-between">
                                                <h1 className="font-bold text-xl">
                                                    Friends
                                                </h1>
                                                <Link
                                                    to="/friends/myId"
                                                    className="text-lg text-blue-700 hover:bg-blue-200"
                                                >
                                                    See All Friends
                                                </Link>
                                            </div>
                                            {/* List */}
                                            <div className="">
                                                <p className="text-base text-gray-400">
                                                    1000 friends
                                                </p>
                                                <div className="grid grid-cols-3 gap-1">
                                                    <div className="bg-white p-0.5">
                                                        <img
                                                            src=""
                                                            className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                                                        />
                                                        <Link
                                                            to={`/profile/friendId`}
                                                            className="font-semibold text-sm"
                                                        >
                                                            Friend FullName
                                                        </Link>
                                                    </div>
                                                    <div className="bg-white p-0.5">
                                                        <img
                                                            src=""
                                                            className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                                                        />
                                                        <Link
                                                            to={`/profile/friendId`}
                                                            className="font-semibold text-sm"
                                                        >
                                                            Friend FullName
                                                        </Link>
                                                    </div>
                                                    <div className="bg-white p-0.5">
                                                        <img
                                                            src=""
                                                            className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                                                        />
                                                        <Link
                                                            to={`/profile/friendId`}
                                                            className="font-semibold text-sm"
                                                        >
                                                            Friend FullName
                                                        </Link>
                                                    </div>
                                                    <div className="bg-white p-0.5">
                                                        <img
                                                            src=""
                                                            className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                                                        />
                                                        <Link
                                                            to={`/profile/friendId`}
                                                            className="font-semibold text-sm"
                                                        >
                                                            Friend FullName
                                                        </Link>
                                                    </div>
                                                    <div className="bg-white p-0.5">
                                                        <img
                                                            src=""
                                                            className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                                                        />
                                                        <Link
                                                            to={`/profile/friendId`}
                                                            className="font-semibold text-sm"
                                                        >
                                                            Friend FullName
                                                        </Link>
                                                    </div>
                                                    <div className="bg-white p-0.5">
                                                        <img
                                                            src=""
                                                            className="w-24 h-24 rounded-md mt-2 cursor-pointer"
                                                        />
                                                        <Link
                                                            to={`/profile/friendId`}
                                                            className="font-semibold text-sm"
                                                        >
                                                            Friend FullName
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // END FRIENDS */}
                                </div>
                                {/* END LEFT */}

                                {/* // POST LIST */}
                                <div className="sm:w-full md:w-1/2 lg:w-1/3">
                                    {/* POST */}
                                    {props.posts.map((post, key) => {
                                        return (
                                            <UserPost
                                                user={props.user}
                                                key={post.id}
                                                post={post}
                                            />
                                        );
                                    })}
                                    {/* END POST */}
                                </div>
                                {/* // END POST LIST */}
                            </div>
                        </div>
                    </div>
                    {/* // END CONTENT */}
                </div>
            </div>
        </MainLayout>
    );
}
