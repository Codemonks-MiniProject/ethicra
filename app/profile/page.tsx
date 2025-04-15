"use client"
import { useEffect, useState } from "react";
import { auth, db } from "@/app/firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { User } from "firebase/auth";

interface UserData {
  email: string;
  name: string;
}

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData>({ email: "", name: "" });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const currentUser: User | null = auth.currentUser;
      if (!currentUser) return;

      const userRef = doc(db, "users", currentUser.uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        const data = snap.data() as UserData;
        setUserData({
          email: data.email,
          name: data.name || "",
        });
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    const userRef = doc(db, "users", currentUser.uid);
    await updateDoc(userRef, {
      name: userData.name,
    });

    alert("✅ Name updated successfully!");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Email:</strong> {userData.email}</p>

      <label className="block mt-4">Name:</label>
      <input
        className="border p-2 w-full"
        type="text"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleUpdate}
      >
        Update Name
      </button>
    </div>
  );
}
