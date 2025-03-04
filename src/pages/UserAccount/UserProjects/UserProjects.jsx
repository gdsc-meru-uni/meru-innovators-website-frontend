import React, { useState } from "react";
import UserAccountLayout from "../UserAccountLayout/UserAccountLayout";
import { FolderOpen, Plus, CheckCircle, Clock, Link, X } from "lucide-react";

const truncateDescription = (text, wordLimit = 25) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const UserProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "AI Chatbot Development",
      description:
        "Developing an AI chatbot for automated customer support and seamless user interaction using NLP and machine learning models.",
      status: "Ongoing",
      deadline: "Aug 30, 2024",
      progress: 75,
      liveLink: "https://aichatbot.com",
    },
    {
      id: 2,
      name: "E-commerce Platform",
      description:
        "A feature-rich e-commerce platform allowing vendors to list products, manage inventory, and process transactions with a secure payment gateway.",
      status: "Completed",
      deadline: "July 15, 2024",
      progress: 100,
      liveLink: "https://ecommerceplatform.com",
    },
    {
      id: 3,
      name: "Blockchain Research",
      description:
        "Exploring blockchain technologies and smart contracts to develop a decentralized application for secure and transparent transactions.",
      status: "Pending",
      deadline: "Sept 10, 2024",
      progress: 20,
      liveLink: "",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    status: "Pending",
    deadline: "",
    progress: 0,
    liveLink: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const addProject = () => {
    if (!newProject.name.trim() || !newProject.description.trim()) {
      alert("Project name and description are required.");
      return;
    }

    const updatedProjects = [...projects, { id: Date.now(), ...newProject }];

    setProjects(updatedProjects);
    setShowModal(false); // Close modal only if the project is added successfully

    // Reset form fields
    setNewProject({
      name: "",
      description: "",
      status: "Pending",
      deadline: "",
      progress: 0,
      liveLink: "",
    });
  };

  return (
    <UserAccountLayout>
      <div>
        {/* Add Project Button */}
        <div className="bg-white shadow-least rounded-sm p-6 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            📂 User Projects
          </h2>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition"
          >
            <Plus size={18} /> Add New Project
          </button>
        </div>

        <div className="grid grid-cols-3 gap-[0.5rem] mt-[0.5rem]">
          <div className="bg-white p-4 rounded-sm shadow-least flex items-center">
            <CheckCircle className="text-green-500" size={24} />
            <div className="ml-3">
              <p className="text-gray-600">Completed</p>
              <h3 className="text-lg font-semibold">
                {projects.filter((p) => p.status === "Completed").length}
              </h3>
            </div>
          </div>
          <div className="bg-white p-4 rounded-sm shadow-least flex items-center">
            <Clock className="text-orange-500" size={24} />
            <div className="ml-3">
              <p className="text-gray-600">Ongoing</p>
              <h3 className="text-lg font-semibold">
                {projects.filter((p) => p.status === "Ongoing").length}
              </h3>
            </div>
          </div>
          <div className="bg-white p-4 rounded-sm shadow-least flex items-center">
            <FolderOpen className="text-gray-500" size={24} />
            <div className="ml-3">
              <p className="text-gray-600">Pending</p>
              <h3 className="text-lg font-semibold">
                {projects.filter((p) => p.status === "Pending").length}
              </h3>
            </div>
          </div>
        </div>

        {/* Project List */}
        <div className="bg-white rounded-sm shadow-least p-4 mt-[0.5rem] overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 text-left">Project Name</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Deadline</th>
                <th className="p-3 text-left">Progress</th>
                <th className="p-3 text-left">Live Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-neutral-300 hover:bg-gray-50 transition"
                >
                  <td className="p-3">{project.name}</td>
                  <td className="p-3 text-gray-600">
                    {truncateDescription(project.description)}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-sm ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : project.status === "Ongoing"
                          ? "bg-yellow-100 text-orange-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="p-3">{project.deadline}</td>
                  <td className="p-3">
                    <div className="w-full bg-gray-200 rounded-sm h-2">
                      <div
                        className={`h-2 rounded-sm ${
                          project.progress === 100
                            ? "bg-green-500"
                            : "bg-blue-500"
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="p-3">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        <Link size={16} /> Visit
                      </a>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Project Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 bg-black/50">
            <div className="bg-white p-6 rounded-sm max-w-[500px] w-[97%]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Add New Project</h3>
                <X
                  className="cursor-pointer"
                  onClick={() => setShowModal(false)}
                />
              </div>

              <input
                type="text"
                name="name"
                placeholder="Project Name"
                value={newProject.name}
                onChange={handleChange}
                className="border p-2 border-neutral-300 w-full mb-2 rounded-sm"
              />

              <input
                type="text"
                name="liveLink"
                placeholder="Project Link (Optional)"
                value={newProject.liveLink}
                onChange={handleChange}
                className="border p-2 border-neutral-300 w-full mb-2 rounded-sm"
              />

              <select
                name="status"
                value={newProject.status}
                onChange={handleChange}
                className="border p-2 border-neutral-300 w-full mb-2 rounded-sm bg-transparent"
              >
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>

              <textarea
                name="description"
                placeholder="Description"
                value={newProject.description}
                onChange={handleChange}
                className="border border-neutral-300 p-2 w-full mb-2 rounded-sm"
              ></textarea>

              <button
                onClick={addProject}
                className="bg-blue-500 text-white px-4 py-2 rounded-sm w-full"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </UserAccountLayout>
  );
};

export default UserProjects;
