import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const Profile = () => {
  const initialData = {
    name: "Rahim Uddin",
    email: "rahim@example.com",
    phone: "01700000000",
    address: "Dhaka, Bangladesh",
    gender: "Male",
    birthDate: "1995-06-15",
  };

  const [userData, setUserData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: userData,
  });

  useEffect(() => {
    reset(userData);
  }, [userData, reset]);

  const onSubmit = (data) => {
    console.log("Saved Data:", data);
    setUserData(data);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    reset(userData);
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-5">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl">
        <div className="flex flex-col items-center mb-8">
          <div className="relative group">
            <img
              src={profilePic || "https://i.ibb.co/2t6YF7d/default-profile.jpg"}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-purple-400 shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            {isEditing && (
              <label className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-full cursor-pointer hover:bg-opacity-60">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <span className="text-white text-sm">Change</span>
              </label>
            )}
          </div>

          <h2 className="text-3xl font-extrabold text-gray-700 mt-5">
            My Profile
          </h2>
          <p className="text-gray-500">Manage your account info</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-600">
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                disabled={!isEditing}
                className={`w-full p-3 rounded-xl border ${
                  isEditing
                    ? "bg-white border-purple-300 focus:border-purple-500"
                    : "bg-gray-100 border-gray-200"
                } transition`}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-semibold text-gray-600">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                disabled={!isEditing}
                className={`w-full p-3 rounded-xl border ${
                  isEditing
                    ? "bg-white border-purple-300 focus:border-purple-500"
                    : "bg-gray-100 border-gray-200"
                } transition`}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-semibold text-gray-600">
                Phone
              </label>
              <input
                type="text"
                {...register("phone")}
                disabled={!isEditing}
                className={`w-full p-3 rounded-xl border ${
                  isEditing
                    ? "bg-white border-purple-300 focus:border-purple-500"
                    : "bg-gray-100 border-gray-200"
                } transition`}
              />
            </div>

            {/* Address */}
            <div>
              <label className="block mb-2 font-semibold text-gray-600">
                Address
              </label>
              <input
                type="text"
                {...register("address")}
                disabled={!isEditing}
                className={`w-full p-3 rounded-xl border ${
                  isEditing
                    ? "bg-white border-purple-300 focus:border-purple-500"
                    : "bg-gray-100 border-gray-200"
                } transition`}
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 font-semibold text-gray-600">
                Gender
              </label>
              <select
                {...register("gender")}
                disabled={!isEditing}
                className={`w-full p-3 rounded-xl border ${
                  isEditing
                    ? "bg-white border-purple-300 focus:border-purple-500"
                    : "bg-gray-100 border-gray-200"
                } transition`}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Birth Date */}
            <div>
              <label className="block mb-2 font-semibold text-gray-600">
                Birth Date
              </label>
              <input
                type="date"
                {...register("birthDate")}
                disabled={!isEditing}
                className={`w-full p-3 rounded-xl border ${
                  isEditing
                    ? "bg-white border-purple-300 focus:border-purple-500"
                    : "bg-gray-100 border-gray-200"
                } transition`}
              />
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            {isEditing ? (
              <>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-indigo-600 transition"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={handleEdit}
                className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-500 hover:to-green-700 transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
