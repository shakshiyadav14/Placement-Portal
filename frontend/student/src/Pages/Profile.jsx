import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContext";

const Profile = ({
    name,
    rollNo,
    personal_email,
    college_email,
    phoneNumber,
    gender,
    batch,
    cgpa,
    backlogs,
    branch,
    familyIncome,
    category,
    studentImage,
    isDisabled,
    password,
    approved,
}) => {
    const { setUserData, setIsChange } = useContext(StoreContext);

    const [data, setData] = useState({
        name,
        rollNo,
        personal_email,
        college_email,
        phoneNumber,
        gender,
        batch,
        cgpa,
        backlogs,
        branch,
        familyIncome,
        category,
        studentImage,
        isDisabled,
        password,
        approved,
    });
    const [edit, setEdit] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserData(data);
        setEdit(false);
        setIsChange(true);
    };

    const handleImage = (event) => {
        setData((prevData) => ({
            ...prevData,
            studentImage: event.target.files[0],
        }));
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center py-8">
            <h2 className="text-3xl font-bold mb-6">My Profile</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="relative">
                        <div>
                            <label htmlFor="studentImage">
                                <img src={data.studentImage
                                    ? URL.createObjectURL(data.studentImage)
                                    : "/images/upload_area.png"}
                                    alt="student image" className="w-40 cursor-pointer"
                                    title="upload profile photo"
                                />
                            </label>
                            <input onChange={handleImage} type="file" name="studentImage" id='studentImage' hidden required />
                        </div>

                        {edit && (
                            <input
                                onChange={handleImage}
                                type="file"
                                name="studentImage"
                                id="studentImage"
                                hidden
                                required
                            />
                        )}
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                        {edit ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {["name", "rollNo", "phoneNumber", "batch"].map((field) => (
                                        <div key={field} className="flex flex-col">
                                            <label
                                                htmlFor={field}
                                                className="block font-semibold text-gray-300 mb-1"
                                            >
                                                {field.charAt(0).toUpperCase() + field.slice(1)}:
                                            </label>
                                            <input
                                                type="text"
                                                value={data[field]}
                                                name={field}
                                                id={field}
                                                required
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    ))}
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="personal_email"
                                            className="block font-semibold text-gray-300 mb-1"
                                        >
                                            Personal Email:
                                        </label>
                                        <input
                                            type="email"
                                            value={data.personal_email}
                                            name="personal_email"
                                            id="personal_email"
                                            required={edit}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="college_email"
                                            className="block font-semibold text-gray-300 mb-1"
                                        >
                                            College Email:
                                        </label>
                                        <input
                                            type="email"
                                            value={data.college_email}
                                            name="college_email"
                                            id="college_email"
                                            required={edit}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="cgpa"
                                            className="block font-semibold text-gray-300 mb-1"
                                        >
                                            CGPA:
                                        </label>
                                        <input
                                            type="number"
                                            value={data.cgpa}
                                            name="cgpa"
                                            id="cgpa"
                                            required={edit}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="gender"
                                            className="block font-semibold text-gray-300 mb-1"
                                        >
                                            Gender:
                                        </label><select
                                            value={data.gender}
                                            name="gender"
                                            id="gender"
                                            required={edit}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="" disabled>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="backlogs"
                                            className="block font-semibold text-gray-300 mb-1"
                                        >
                                            Backlog:
                                        </label><select
                                            value={data.backlogs}
                                            name="backlogs"
                                            id="backlogs"
                                            required={edit}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="" disabled>Select</option>
                                            <option value="Nil">Nil</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value=">=4">{">"}=4</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="branch"
                                            className="block font-semibold text-gray-300 mb-1"
                                        >
                                            Branch:
                                        </label><select
                                            value={data.branch}
                                            name="branch"
                                            id="branch"
                                            required={edit}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="" disabled>Select Branch</option>
                                            <option value="CS">CS</option>
                                            <option value="IT">IT</option>
                                            <option value="ECE">ECE</option>
                                            <option value="EE">EE</option>
                                            <option value="CIVIL">CIVIL</option>
                                            <option value="MECH">MECH</option>
                                            <option value="PIE">PIE</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="familyIncome"
                                            className="block font-semibold text-gray-300 mb-1"
                                        >
                                            Family Income:
                                        </label><select
                                            value={data.familyIncome}
                                            name="familyIncome"
                                            id="familyIncome"
                                            required={edit}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="" disabled>Select Income</option>
                                            <option value="1Lac">{"<"}1Lac</option>
                                            <option value=">=1Lac">{">"}=1Lac</option>
                                            <option value=">=5Lac">{">="}5Lac</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="category"
                                            className="block font-semibold text-gray-300 mb-1"
                                        >
                                            Category:
                                        </label><select
                                            value={data.category}
                                            name="category"
                                            id="category"
                                            required={edit}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="" disabled>Select Category</option>
                                            <option value="Gen">Gen</option>
                                            <option value="OBC">OBC</option>
                                            <option value="SC/ST">SC/ST</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="isDisabled"
                                            className="block font-semibold text-gray-300 mb-1"
                                        >
                                            Disability:
                                        </label><select
                                            value={data.isDisabled}
                                            name="isDisabled"
                                            id="isDisabled"
                                            required={edit}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => setEdit(false)}
                                        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-600">
                                    <thead>
                                        <tr>
                                            <th className="border border-gray-600 px-4 py-2">Field</th>
                                            <th className="border border-gray-600 px-4 py-2">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            "name",
                                            "rollNo",
                                            "personal_email",
                                            "college_email",
                                            "phoneNumber",
                                            "gender",
                                            "batch",
                                            "cgpa",
                                            "backlogs",
                                            "branch",
                                            "familyIncome",
                                            "category",
                                            "isDisabled",
                                        ].map((field) => (
                                            <tr key={field} className="border-b border-gray-600">
                                                <td className="px-4 py-2 font-semibold text-gray-300 w-1/3 border-r border-gray-600">
                                                    {field === "isDisabled"
                                                        ? "Disability"
                                                        : field === "phoneNumber"
                                                            ? "Phone Number"
                                                            : field === "rollNo"
                                                                ? "Roll No"
                                                                : field === "familyIncome"
                                                                    ? "Family Income"
                                                                    : field.charAt(0).toUpperCase() + field.slice(1)}
                                                    :
                                                </td>
                                                <td className="px-4 py-2 pl-20 text-gray-400 border-r border-gray-600">{data[field]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="flex justify-end mt-4">
                                    <button
                                        onClick={() => setEdit(true)}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
