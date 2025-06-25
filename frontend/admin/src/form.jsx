import { useState } from "react";

function Form() {
  const [coordinators, setCoordinators] = useState([]);
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [post, setPost] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isBadEmail, setIsBadEmail] = useState(false);
  const [isEmailAlreadyExists, setIsEmailAlreadyExists] = useState(false);
  const [isRollNoAlreadyExists, setIsRollNoAlreadyExists] = useState(false);

  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const handleAddCoordinator = (e) => {
    e.preventDefault();
    if (!email.endsWith("@nitkkr.ac.in")) {
      setIsBadEmail(true);
      return;
    }
    setIsBadEmail(false);

    if (coordinators.some((coordinator) => coordinator.email === email)) {
      setIsEmailAlreadyExists(true);
      return;
    }
    setIsEmailAlreadyExists(false);

    if (coordinators.some((coordinator) => coordinator.rollNo === rollNo)) {
      setIsRollNoAlreadyExists(true);
      return;
    }
    setIsRollNoAlreadyExists(false);

    const password = generatePassword();
    setCoordinators([...coordinators, { email, rollNo, post, password }]);
    setEmail("");
    setRollNo("");
    setPost("");
  };

  const handleDeleteCoordinator = (index) => {
    setCoordinators(coordinators.filter((_, i) => i !== index));
  };

  const handleCopyPassword = (password) => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="bg-gray-800 min-h-screen flex justify-center items-center">
      <div className="bg-gray-900 shadow-lg rounded-lg p-6 w-5/12 text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Coordinators List
        </h2>
        <br />
        {/* Form */}
        <form
          onSubmit={handleAddCoordinator}
          className="flex flex-col space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold"
            >
              Email (must end with @nitkkr.ac.in):
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-white"
              placeholder="example@nitkkr.ac.in"
              required
            />
          </div>

          {isBadEmail === true ? (
            <p className="text-red-500">Email must end with @nitkkr.ac.in</p>
          ) : isEmailAlreadyExists === true ? (
            <p className="text-red-500">Email ID already exists</p>
          ) : (
            ""
          )}

          <label htmlFor="rollNo" className="font-semibold">
            Roll No:
          </label>
          <input
            type="text"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-white"
            placeholder="Roll No"
            required
          />
          {isRollNoAlreadyExists && (
            <p className="text-red-500">Roll No already exists</p>
          )}

          <label htmlFor="post" className="font-semibold">
            Post:
          </label>
          <select
            id="post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-white"
          >
            <option value="">Select Post</option>
            <option value="ICC">ICC</option>
            <option value="PCC">PCC</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Coordinator
          </button>
        </form>

        {/* Coordinator List */}
        <ul className="mt-6 space-y-4">
          {coordinators.map((coordinator, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 pr-2 bg-gray-800 border rounded shadow"
            >
              <div>
                <p className="font-medium">Email: {coordinator.email}</p>
                <p className="font-medium">Roll No: {coordinator.rollNo}</p>
                <p className="font-medium">Post: {coordinator.post}</p>
                <div className="relative flex items-center space-x-2 mt-1">
                  <label htmlFor={index}>Password: </label>
                  <div className="relative w-4/6">
                    <input
                      type="password"
                      id={index}
                      value={coordinator.password}
                      className="password-input border-gray-500 bg-gray-600 rounded-md shadow-sm px-2 py-1 w-full pr-12"
                      readOnly
                    />
                    <button
                      type="button"
                      className="toggle-password absolute inset-y-0 right-2 text-blue-500 hover:underline text-sm"
                      onClick={(e) => {
                        const input = e.target
                          .closest("div")
                          .querySelector(".password-input");
                        if (input.type === "password") {
                          input.type = "text";
                          e.target.textContent = "Hide";
                        } else {
                          input.type = "password";
                          e.target.textContent = "Show";
                        }
                      }}
                    >
                      Show
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      title="Copy"
                      onClick={() => {
                        handleCopyPassword(coordinator.password);
                        setCopiedIndex(index);
                        setTimeout(() => setCopiedIndex(null), 1500);
                      }}
                      className="flex items-center justify-center rounded-md px-3 py-1"
                    >
                      {copiedIndex === index ? (
                        <span className="text-green-500 font-medium">
                          Copied
                        </span>
                      ) : (
                        <img src="/copy.png" alt="Copy" className="w-7" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="delete-btn bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                onClick={() => handleDeleteCoordinator(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Form;
