import React, { useEffect } from 'react'
import { useContext, useState, useRef } from 'react';
import { StoreContext } from '../../context/StoreContext';

const CompanyRequirements = () => {
    const { CompanyReq, setCompanyReq, setIsChange } = useContext(StoreContext);

    const [data, setData] = useState(CompanyReq);

    useEffect(() => {
        setData(CompanyReq);
    }, [CompanyReq]);

    const [isNewLocationAdding, setIsNewLocationAddinig] = useState(false); // if we have clicked on add location or not
    const [newLocation, setNewLocation] = useState(""); // stores the new location 
    const [edit, setEdit] = useState(false); // if edit is true or not
    const [editIndex, setEditIndex] = useState(null); // in location which location we are editing
    const [editValue, setEditValue] = useState(''); // in location the new edited location value

    const [isNewRoleAdding, setIsNewRoleAddinig] = useState(false); // if we have clicked on add role or not
    const [newRole, setNewRole] = useState(""); // stores the new role 
    const [editRoleIndex, setEditRoleIndex] = useState(null); // in role which location we are editing
    const [editRoleValue, setEditRoleValue] = useState(''); // in role the new edited role value

    // handles the location editing
    const handleEditLocation = (index, loc) => {
        setEditIndex(index);
        setEditValue(loc);
    };

    // handles the role editing
    const handleEditRole = (index, rol) => {
        setEditRoleIndex(index);
        setEditRoleValue(loc);
    };

    // deletes any location
    const handleDeleteLocation = (index) => {
        const updatedLocations = data.location.filter((_, i) => i !== index);
        setData({ ...data, location: updatedLocations });
    };

    // deletes any role
    const handleDeleteRole = (index) => {
        const updatedRole = data.job_profile.filter((_, i) => i !== index);
        setData({ ...data, job_profile: updatedRole });
    };


    // adds new location
    const handleAddLocation = () => {
        let flag = false;
        if (data.location.includes(newLocation)) {
            flag = true;
        }
        if (newLocation.trim()) {
            setData((prev) => ({
                ...prev,
                location: [...prev.location, newLocation],
            }));
            setNewLocation("");
            setIsNewLocationAddinig(false);
        }
        if (flag === true) {
            handleDeleteLocation(data.location.length);
        }
    };

    // adds new role
    const handleAddRole = () => {
        let flag = false;
        if (data.job_profile.includes(newRole)) {
            flag = true;
        }
        if (newRole.length == 0) {
            return;
        }

        if (newRole.trim()) {
            setData((prev) => ({
                ...prev,
                job_profile: [...prev.job_profile, newRole],
            }));
            setNewRole("");
            setIsNewRoleAddinig(false);
        }
        if (flag === true) {
            handleDeleteRole(data.job_profile.length);
        }
    };

    // handles the new seletion of any branch
    const handleBranchSelection = (e, branch) => {
        setData((prev) => {
            const branches = [...prev.branch];
            if (e.target.checked) {
                if (!branches.includes(branch)) {
                    branches.push(branch);
                }
            }
            else {
                const index = branches.indexOf(branch);
                if (index > -1) {
                    branches.splice(index, 1);
                }
            }
            return { ...prev, branch: branches };
        });
    };

    // handles any change in other values like name,ctc etc.
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // handles the submition
    const handleSubmit = (event) => {
        event.preventDefault();
        setCompanyReq(data);
        setEdit(false);
        setIsChange(true);
    };

    // handles the image
    const handleImage = (event) => {
        setData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.files[0]
        }))
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8">
            <h2 className="text-3xl font-bold mb-6">Upload Requirements</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="relative">
                        <div>
                            <label htmlFor="companyImage">
                                <img src={data.studentImage
                                    ? URL.createObjectURL(data.studentImage)
                                    : "/images/upload_area.png"}
                                    alt="company image" className="w-40 cursor-pointer"
                                    title="upload company photo"
                                />
                            </label>
                            <input onChange={handleImage} type="file" name="companyImage" id='companyImage' hidden required />
                        </div>

                        {edit && (
                            <input
                                onChange={handleImage}
                                type="file"
                                name="companyImage"
                                id="companyImage"
                                hidden
                                required
                            />
                        )}
                    </div>

                    <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                        {
                            edit === false ?
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
                                                "ctc",
                                                "job_id",
                                                "gender",
                                                "cgpa",
                                                "batch",
                                                "backlogs",
                                                "onlyPWD",
                                                "OA",
                                                "aptitude",
                                                "group_disscussion",
                                                "tech_rounds",
                                                "hr_rounds",
                                                "last_date",
                                                "branch",
                                                "job_profile",
                                                "location",
                                                "description"
                                            ].map((field) => (
                                                <tr key={field} className="border-b border-gray-600">
                                                    <td className="px-4 py-2 font-semibold text-gray-300 w-1/3 border-r border-gray-600">
                                                        {field === "onlyPWD"
                                                            ? "Is Only PWD Candidates Allowed"
                                                            : field === "OA"
                                                                ? "Is Online Assessment"
                                                                : field === "aptitude"
                                                                    ? "Is Aptitude Round"
                                                                    : field === "group_disscussion"
                                                                        ? "Is Group Discussion"
                                                                        : field.charAt(0).toUpperCase() + field.slice(1)}
                                                        :
                                                    </td>
                                                    {field === "group_disscussion" ? (
                                                        <td className="px-4 py-2 pl-20 text-gray-400 border-r border-gray-600">
                                                            {data.group_disscussion === true ? "Yes" : data.group_disscussion === false ? "No" : ""}
                                                        </td>
                                                    ) : ["branch", "job_profile", "location"].includes(field) ? (
                                                        <td className="px-4 py-2 pl-20 text-gray-400 border-r border-gray-600">
                                                            {data[field].join(", ")}
                                                        </td>
                                                    ) : field === "description" ? (
                                                        <td className="px-4 py-2 pl-20 text-gray-400 border-r border-gray-600">
                                                            {data.description.length > 50 ? data.description.substring(0, 50) + "..." : data.description}
                                                        </td>
                                                    ) : (
                                                        <td className="px-4 py-2 pl-20 text-gray-400 border-r border-gray-600">
                                                            {data[field]}
                                                        </td>
                                                    )}
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
                                :
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                        <div className="flex flex-col">
                                            <div>
                                                <label htmlFor="name" className="block font-semibold text-gray-300 mb-1">Name:</label>
                                                <input
                                                    type="text"
                                                    value={data.name}
                                                    name="name"
                                                    id="name"
                                                    required
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <div>
                                                <label htmlFor="ctc" className="block font-semibold text-gray-300 mb-1">CTC:</label>
                                                <input
                                                    type="text"
                                                    value={data.ctc}
                                                    name="ctc"
                                                    id="ctc"
                                                    required={edit}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <div>
                                                <label htmlFor="job_id" className="block font-semibold text-gray-300 mb-1">Job ID:</label>
                                                <input
                                                    type="text"
                                                    value={data.job_id}
                                                    name="job_id"
                                                    id="job_id"
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <div>
                                                <label htmlFor="gender" className="block font-semibold text-gray-300 mb-1">Gender Eligible:</label>
                                                <select
                                                    value={data.gender}
                                                    name="gender"
                                                    id="gender"
                                                    required={edit}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    <option value="" disabled>Select Gender</option>
                                                    <option value="Only Female">Only Female</option>
                                                    <option value="Both">Both</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <div>
                                                <label htmlFor="cgpa" className="block font-semibold text-gray-300 mb-1">Minimum CGPA:</label>
                                                <input
                                                    type="number"
                                                    value={data.cgpa}
                                                    name="cgpa"
                                                    id="cgpa"
                                                    required={edit}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                            </div>
                                        </div>

                                        <div className='flex flex-col'> <div>
                                            <label htmlFor="batch" className="block font-semibold text-gray-300 mb-1">Batch:</label>
                                            <input
                                                type="text"
                                                value={data.batch}
                                                name="batch"
                                                id="batch"
                                                required={edit}
                                                readOnly={!edit}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        </div>

                                        <div className='flex flex-col'>  <div>
                                            <label htmlFor="backlogs" className="block font-semibold text-gray-300 mb-1">Backlog :</label>
                                            <select
                                                value={data.backlogs}
                                                name="backlogs"
                                                id="backlogs"
                                                required={edit}
                                                readOnly={!edit}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option value="" disabled>Select</option>
                                                <option value="Nil">Nil</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value=">=4">{">"}=4</option>
                                            </select>

                                        </div>
                                        </div>

                                        <div className='flex flex-col'>  <div>
                                            <label htmlFor="onlyPWD" className="block font-semibold text-gray-300 mb-1">Is Only PWD Candidates Allowed:</label>
                                            <input
                                                    type="text"
                                                    value={data.onlyPWD}
                                                    name="job_id"
                                                    id="job_id"
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                            
                                        </div>
                                        </div>

                                        <div className='flex flex-col'> <div>
                                            <label htmlFor="OA" className="block font-semibold text-gray-300 mb-1">Is Online Assessment:</label>
                                            <select
                                                value={data.OA}
                                                name="OA"
                                                id="OA"
                                                required={edit}
                                                readOnly={!edit}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option value="" disabled>Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        </div>

                                        <div className='flex flex-col'> <div>
                                            <label htmlFor="aptitude" className="block font-semibold text-gray-300 mb-1">Is Aptitude Round:</label>
                                            <select
                                                value={data.aptitude}
                                                name="aptitude"
                                                id="aptitude"
                                                required={edit}
                                                readOnly={!edit}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option value="" disabled>Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        </div>

                                        <div className='flex flex-col'>  <div>
                                            <label htmlFor="group_disscussion" className="block font-semibold text-gray-300 mb-1">Is Group Discussion:</label>
                                            <select
                                                value={data.group_disscussion}
                                                name="group_disscussion"
                                                id="group_disscussion"
                                                required={edit}
                                                readOnly={!edit}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option value="" disabled>Select</option>
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                            </select>
                                        </div>
                                        </div>

                                        <div className='flex flex-col'>  <div>
                                            <label htmlFor="tech_rounds" className="block font-semibold text-gray-300 mb-1">Number of Tech Rounds :</label>
                                            <input
                                                type="text"
                                                value={data.tech_rounds}
                                                name="tech_rounds"
                                                id="tech_rounds"
                                                required={edit}
                                                readOnly={!edit}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        </div>

                                        <div className='flex flex-col'> <div>
                                            <label htmlFor="hr_rounds" className="block font-semibold text-gray-300 mb-1">Is HR Round:</label>
                                            <select
                                                value={data.hr_rounds}
                                                name="hr_rounds"
                                                id="hr_rounds"
                                                required={edit}
                                                readOnly={!edit}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option value="" disabled>Select</option>
                                                <option value={1}>Yes</option>
                                                <option value={0}>No</option>
                                            </select>
                                        </div>
                                        </div>

                                        <div className='flex flex-col'> <div>
                                            <label htmlFor="last_date" className="block font-semibold text-gray-300 mb-1">Last Date to Apply :</label>
                                            <input
                                                type="date"
                                                value={data.last_date}
                                                name="last_date"
                                                id="last_date"
                                                required={edit}
                                                readOnly={!edit}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <div>
                                                <label htmlFor="branch" className="block font-semibold text-gray-300 mb-1">Branches:</label>
                                                <div className="w-full flex px-3 py-2 border rounded border-gray-400 ">
                                                    <div className='w-2/4'>
                                                        {["CS", "IT", "ECE", "EE"].map((branch) => (
                                                            <label key={branch} className="block mb-1">
                                                                <input
                                                                    type="checkbox"
                                                                    value={branch}
                                                                    checked={data.branch.includes(branch)}
                                                                    onChange={(e) => handleBranchSelection(e, branch)}
                                                                    className="mr-2"
                                                                />
                                                                {branch}
                                                            </label>
                                                        ))}
                                                    </div>
                                                    <div className='w-2/4'>
                                                        {["CIVIL", "MECH", "PIE"].map((branch) => (
                                                            <label key={branch} className="block mb-1">
                                                                <input
                                                                    type="checkbox"
                                                                    value={branch}
                                                                    checked={data.branch.includes(branch)}
                                                                    onChange={(e) => handleBranchSelection(e, branch)}
                                                                    className="mr-2"
                                                                />
                                                                {branch}
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col space-y-4">
                                            <div>
                                                <label htmlFor="job_profile" className="block font-semibold text-gray-300 mb-1">
                                                    Job Profile:
                                                </label>
                                                {data.job_profile.map((rol, index) => (
                                                    <div key={index} className="mb-2 flex items-center">
                                                        {editRoleIndex === index ? (
                                                            <input
                                                                type="text"
                                                                value={editRoleValue}
                                                                onChange={(e) => setEditRoleValue(e.target.value)}
                                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                                        ) : (
                                                            <input
                                                                type="text"
                                                                value={rol}
                                                                name={`role-${index}`}
                                                                onClick={() => handleEditRole(index, rol)}
                                                                readOnly
                                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                                        )}

                                                        <button
                                                            onClick={() => handleDeleteRole(index)}
                                                            className="ml-2 px-3 py-2"
                                                        >
                                                            <img src="/images/delete.png" className='w-6' alt="Delete" />
                                                        </button>
                                                    </div>
                                                ))}

                                                <div className="mt-4">
                                                    {!isNewRoleAdding ? (
                                                        <button
                                                            onClick={() => setIsNewRoleAddinig(true)}
                                                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                        >
                                                            {data.job_profile.length === 0 ? "Add Role" : "Add More Roles"}
                                                        </button>
                                                    ) : (
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                value={newRole}
                                                                placeholder="Enter a job role"
                                                                onChange={(e) => setNewRole(e.target.value)}
                                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            />
                                                            <button
                                                                onClick={handleAddRole}
                                                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                            >
                                                                Add
                                                            </button>
                                                            <button
                                                                onClick={() => setIsNewRoleAddinig(false)}
                                                                className="ml-2 mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col space-y-4">
                                            <div>
                                                <label htmlFor="Location" className="block font-semibold text-gray-300 mb-1">
                                                    Locations:
                                                </label>
                                                {data.location.map((loc, index) => (
                                                    <div key={index} className="mb-2 flex items-center">
                                                        {editIndex === index ? (
                                                            <input
                                                                type="text"
                                                                value={editValue}
                                                                onChange={(e) => setEditValue(e.target.value)}
                                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                                        ) : (
                                                            <input
                                                                type="text"
                                                                value={loc}
                                                                name={`location-${index}`}
                                                                onClick={() => handleEditLocation(index, loc)}
                                                                readOnly
                                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                                        )}

                                                        <button
                                                            onClick={() => handleDeleteLocation(index)}
                                                            className="ml-2 px-3 py-2"
                                                        >
                                                            <img src="/images/delete.png" className='w-6' alt="Delete" />
                                                        </button>
                                                    </div>
                                                ))}

                                                <div className="mt-4">
                                                    {!isNewLocationAdding ? (
                                                        <button
                                                            onClick={() => setIsNewLocationAddinig(true)}
                                                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                        >
                                                            {data.location.length === 0 ? "Add Location" : "Add More Locations"}
                                                        </button>
                                                    ) : (
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                value={newLocation}
                                                                placeholder="Enter a location"
                                                                onChange={(e) => setNewLocation(e.target.value)}
                                                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            />
                                                            <button
                                                                onClick={handleAddLocation}
                                                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                            >
                                                                Add
                                                            </button>
                                                            <button
                                                                onClick={() => setIsNewLocationAddinig(false)}
                                                                className="ml-2 mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <div>
                                                <label htmlFor="description" className="block font-semibold text-gray-300 mb-1">Description:</label>
                                                <textarea
                                                    value={data.description}
                                                    name="description"
                                                    id="description"
                                                    required
                                                    onChange={handleChange}
                                                    rows={5}
                                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
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
                                </form >
                        }
                    </div>
                </div>
            </div>


        </div >
    );
}

export default CompanyRequirements
