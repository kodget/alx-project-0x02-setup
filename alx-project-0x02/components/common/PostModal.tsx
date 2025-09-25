import { useEffect, useRef, useState } from "react";
import { ModalProps } from "@/interfaces";
import { COLOR_OPTIONS } from "@/constants";

const PostModal: React.FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  addPerson,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [initColor, setInitColor] = useState("");
  const [hoverColor, setHoverColor] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const isFormComplete =
    name.trim().length > 1 &&
    description.trim().length > 1 &&
    initColor &&
    hoverColor;

  // Focus trap
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isModalOpen, setIsModalOpen]);

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormComplete) {
      setShowErrors(true);
      return;
    }

    addPerson({
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      name: name.trim(),
      description: description.trim(),
      initColor,
      hoverColor,
    });

    setName("");
    setDescription("");
    setInitColor("");
    setHoverColor("");
    setShowErrors(false);
    setIsModalOpen(false);
  };

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-auto"
    >
      <div className="w-full max-w-xl bg-white rounded-2xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Add New Person
          </h2>
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name..."
              className={`w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                showErrors && name.trim().length <= 1
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {showErrors && name.trim().length <= 1 && (
              <p className="mt-1 text-xs text-red-600">Name is required.</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Describe the person..."
              className={`w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                showErrors && description.trim().length <= 1
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {showErrors && description.trim().length <= 1 && (
              <p className="mt-1 text-xs text-red-600">
                Description is required.
              </p>
            )}
          </div>

          {/* Initial Color */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Color
            </label>
            <div className="flex flex-wrap gap-2">
              {COLOR_OPTIONS.map((opt) => (
                <button
                  key={opt.bg}
                  type="button"
                  onClick={() => setInitColor(opt.bg)}
                  title={opt.label}
                  className={`w-12 h-10 rounded-md shadow-sm transition transform hover:scale-105 ${
                    opt.bg
                  } ${initColor === opt.bg ? "ring-2 ring-blue-500" : ""}`}
                />
              ))}
            </div>
            {showErrors && !initColor && (
              <p className="mt-1 text-xs text-red-600">
                Choose an initial color.
              </p>
            )}
          </div>

          {/* Hover Color */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hover Color
            </label>
            <div className="flex flex-wrap gap-2">
              {COLOR_OPTIONS.map((opt) => (
                <button
                  key={opt.hover}
                  type="button"
                  onClick={() => setHoverColor(opt.hover)}
                  title={opt.label + " (hover)"}
                  className={`w-12 h-10 rounded-md shadow-sm transition transform hover:scale-105 ${
                    opt.bg
                  } ${hoverColor === opt.hover ? "ring-2 ring-blue-500" : ""}`}
                />
              ))}
            </div>
            {showErrors && !hoverColor && (
              <p className="mt-1 text-xs text-red-600">Choose a hover color.</p>
            )}
          </div>

          {/* Live preview */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preview
            </label>
            <div
              className={`w-full rounded-lg px-4 py-3 text-white text-center font-medium transition-all ${initColor} ${hoverColor}`}
            >
              {name ? name : "Person Name"}
              <div className="mt-1 text-xs text-white/90">
                {description
                  ? description.slice(0, 40) +
                    (description.length > 40 ? "..." : "")
                  : "Description preview"}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={!isFormComplete}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition"
            >
              Add Person
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
