import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Profile(props) {
    return (
        <MainLayout auth={props.auth} errors={props.errors}>
            <Head title="Profile" />
            <div className="flex flex-col">
                <div className="">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Image
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Surname
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Username
                                        </th>
                                        <th
                                            scope="col"
                                            className="relative px-6 py-3"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {props.users.map((user) => (
                                        <tr key={user.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={user.image}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div className=" font-medium text-gray-900">
                                                    {user.name}
                                                </div>
                                            </td>
                                            <td>
                                                <div className=" font-medium text-gray-900">
                                                    {user.surname}
                                                </div>
                                            </td>
                                            <td>
                                                <div className=" text-gray-500">
                                                    {user.email}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className=" text-gray-900">
                                                    @{user.username}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right  font-medium">
                                                <Link
                                                    href={route(
                                                        "profile.userProfile",
                                                        user.username
                                                    )}
                                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full  px-5 py-2.5 text-center mr-2 mb-2"
                                                >
                                                    Go{" "}
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
