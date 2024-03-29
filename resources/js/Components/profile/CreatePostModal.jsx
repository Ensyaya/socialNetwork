import React from "react";
import TextAreaInput from "./TextAreaInput";
import FileInput from "../FileInput";
import { useForm } from "@inertiajs/inertia-react";
import { InputError, InputLabel, PrimaryButton } from "../ProfileTemp";

function CreatePostModal(props) {
    const { data, setData, post, reset, errors, processing } = useForm({
        content: "",
        image: "",
        status: "Open to Everyone",
    });
    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const closeModal = () => {
        props.setShowPostModal(false);
        reset();
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("post.createPost"), {
            onSuccess: () => closeModal(),
            preserveScroll: true,
        });
    };
    return (
        <>
            <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div
                    style={{ width: "500px" }}
                    className="relative my-6 mx-6uto max-w-3xl"
                >
                    <form onSubmit={submit} encType="multipart/form-data">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Create Post
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={closeModal}
                                >
                                    <span className="bg-transparent text-black o h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        x
                                    </span>
                                </button>
                            </div>
                            <InputError
                                message={errors.content}
                                className="mt-2 mx-6"
                            />

                            <div className="relative p-6 flex-auto">
                                <TextAreaInput
                                    placeHolder="what do you think?"
                                    id="content"
                                    name="content"
                                    value={data.content}
                                    className="mt-1 block w-full"
                                    autoComplete="content"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <InputLabel
                                for="status"
                                className="mx-6 mb-2 text-lg"
                            >
                                Who Can See
                            </InputLabel>
                            <div className="relative p-6 flex-auto">
                                <select
                                    name="status"
                                    id="status"
                                    className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    required
                                >
                                    <option value="Open to Everyone">
                                        Open to Everyone
                                    </option>
                                    <option value="Only Friends">
                                        Only Friends
                                    </option>
                                    <option value="Hidden">Hidden</option>
                                </select>
                            </div>

                            <InputError
                                message={errors.image}
                                className="mt-2 mx-6"
                            />

                            <InputLabel
                                for="image"
                                className="mx-6 mb-2 text-lg"
                            >
                                Image
                            </InputLabel>
                            <div className="mx-4">
                                <FileInput
                                    id="image"
                                    name="image"
                                    className=" block w-full p-2"
                                    autoComplete="image"
                                    handleChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                            </div>

                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                                <PrimaryButton
                                    processing={processing}
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    Share
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
export default CreatePostModal;
