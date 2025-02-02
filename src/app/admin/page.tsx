"use client";

import { useUser } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const AdminDashboard = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F9F1E7]">
        <Loader2 className="w-10 h-10 animate-spin text-black" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9F1E7] text-black">
        <h1 className="text-3xl font-bold text-red-600">Access Denied</h1>
        <p className="text-gray-600">You must be logged in to view this dashboard.</p>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#F9F1E7] p-6 overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9F1E7] to-white opacity-70"></div>
      <div className="absolute -top-20 left-20 w-80 h-80 bg-black/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10"
      >
        <Card className="w-full max-w-3xl bg-opacity-50 backdrop-blur-lg shadow-[0px_0px_15px_rgba(0,0,0,0.1)] rounded-2xl border border-gray-300 bg-white text-black overflow-hidden">  
  {/* Header */}  
  <CardHeader>
  <div className="bg-gradient-to-r from-black to-gray-900 text-white text-center py-6 rounded-t-2xl shadow-md">
    <CardTitle>
      <span className="text-3xl font-extrabold tracking-wide uppercase">
        Admin Dashboard
      </span>
    </CardTitle>
  </div>
</CardHeader>


          {/* Content */}
          <CardContent>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* User Info */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
              >
                <h3 className="text-xl font-bold">{user.firstName} {user.lastName}</h3>
                <p className="text-sm text-gray-600">Administrator</p>
              </motion.div>

              {/* User Details */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
              >
                <p className="text-sm">
                  <span className="font-medium text-gray-800">Email:</span> {user.primaryEmailAddress?.emailAddress || "N/A"}
                </p>
                <p className="text-sm mt-2">
                  <span className="font-medium text-gray-800">Joined:</span> {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                </p>
              </motion.div>
            </div>

            {/* Action Button */}
            <div className="flex justify-center mt-8">
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Button className="px-8 py-3 text-white bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-black transition-all shadow-lg rounded-lg uppercase font-semibold tracking-wider">
                  Manage Users
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
