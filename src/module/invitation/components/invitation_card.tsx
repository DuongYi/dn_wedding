"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface InvitationCardProps {
  name: string;
  type: number; // 0 - Thiệp cưới T7 nhà trai | 1 - Thiệp cưới CN nhà trai | 2 - Thiệp cưới CN nhà gái
}

// Tạo data cho từng loại thiệp để bắt theo type 
const invitationData = [
  {
    name: "Thiệp cưới T7 nhà trai",
    type: 0,
    time: "16 Giờ - 08.11.2025",
    date: "Thời gian: 16:15 - 08 tháng 11, 2025 | Tức 19.09 năm Ất Tỵ",
    day: "Thứ 7",
    location: "Thôn Luật Nội Tây, Xã Quang Lịch, Tỉnh Hưng Yên",
    addressDescription: "Tại gia đình nhà trai",

  },
  {
    name: "Thiệp cưới CN nhà trai",
    type: 1,
    time: "8:00 - 09.11.2025",
    date: "Thời gian: 8:00 - 09 tháng 11, 2025 | Tức 20.09 năm Ất Tỵ",
    day: "Chủ Nhật",
    location: "Thôn Luật Nội Tây, Xã Quang Lịch, Tỉnh Hưng Yên",
    addressDescription: "Tại gia đình nhà trai",

  },
  {
    name: "Thiệp cưới CN nhà gái",
    type: 2,
    time: "8:30 - 09.11.2025",
    date: "Thời gian: 8:30 - 09 tháng 11, 2025 | Tức 20.09 năm Ất Tỵ",
    day: "Chủ Nhật",
    location: "Thôn Cốc, Phú Châu, Tỉnh Hưng Yên",
    addressDescription: "Tại gia đình nhà gái",

  },
];

const InvitationCard: React.FC<InvitationCardProps> = ({ name, type }) => {
  return (
    <div className="w-full bg-linear-to-br from-pink-50 via-white to-pink-50 flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header Section */}
        <div className="relative h-64 md:h-80 bg-linear-to-br from-pink-200 to-pink-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-4">
                <Image
                  src="/asset/pictures/logo/dnlogo.png"
                  alt="flower decoration"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-felidae text-pink-900 mb-2">
                We&apos;re Getting Married
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Trân trọng kính mời */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-linear-to-r from-pink-50 via-white to-pink-50 py-8 px-6"
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-2xl md:text-3xl font-light text-gray-800 mb-3 tracking-wide"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Trân trọng kính mời
            </motion.h3>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-2xl md:text-3xl font-light text-gray-800 mb-3 tracking-wide"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {name}
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-px bg-linear-to-r from-transparent via-pink-400 to-transparent mx-auto mb-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              Tới dự bữa cơm thân mật chung vui cùng gia đình chúng tôi
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="p-8 md:p-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-4xl text-pink-600 font-fz-manstein">
                  Đức Dương
                </h2>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-3xl md:text-4xl text-pink-400 font-fz-manstein"
              >
                &
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-4xl text-pink-600 font-fz-manstein">
                  Kim Ngân
                </h2>
              </motion.div>
            </div>
          </motion.div>

          {/* Wedding Details */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="space-y-6 mb-8"
          >
            {/* Date & Time */}
            <div className="text-center border-t border-b border-pink-200 py-6">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                ĐƯỢC TỔ CHỨC VÀO
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                {invitationData[type].time}
              </p>
              <p className="text-lg md:text-xl text-gray-600 mt-2">
                {invitationData[type].day}
              </p>
            </div>

            {/* Venue */}
            <div className="text-center">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">
                Địa điểm
              </p>
              <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {invitationData[type].addressDescription}
              </p>
              <p className="text-gray-600 text-base md:text-lg">
                {invitationData[type].location}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                {invitationData[type].date}
              </p>
            </div>
          </motion.div>

          {/* Decorative Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="relative h-64 md:h-80 mb-8 rounded-2xl overflow-hidden"
          >
            <Image
              src="/asset/pictures/home/wedding-couple2.png"
              alt="Wedding Couple"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RSVP Message */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-600 text-lg md:text-xl italic mb-4">
              Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi!
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 font-semibold">
                Xác nhận tham dự
              </button>
              <button className="px-8 py-3 bg-white text-pink-500 border-2 border-pink-500 rounded-full hover:bg-pink-50 transition-colors duration-300 font-semibold">
                Gửi lời chúc
              </button>
            </div>
          </motion.div>
        </div>

        {/* Lễ Thành Hôn */}
        <div className="bg-linear-to-br from-pink-50 via-white to-purple-50 py-12 px-8">
          <div className="max-w-4xl mx-auto">
            {/* Tiêu đề Lễ Thành Hôn */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Lễ Thành Hôn
              </h2>

              {/* Tên chú rể và cô dâu */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <h3 className="text-3xl md:text-4xl text-pink-600 font-fz-manstein">
                  Đức Dương
                </h3>
                <span className="text-2xl md:text-3xl text-pink-400 font-fz-manstein">
                  &
                </span>
                <h3 className="text-3xl md:text-4xl text-pink-600 font-fz-manstein">
                  Kim Ngân
                </h3>
              </div>
            </motion.div>

            {/* Thời gian tổ chức */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.8 }}
              className="text-center mb-8 p-6 bg-white rounded-xl shadow-md"
            >
              <p className="text-gray-600 text-base mb-2">Được tổ chức vào</p>
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                {invitationData[type].time}
              </p>
              <p className="text-lg text-gray-600 mb-1">{invitationData[type].day}</p>
              <p className="text-sm text-gray-500">{invitationData[type].date}</p>
            </motion.div>

            {/* Địa điểm */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.8 }}
              className="text-center mb-8"
            >
              <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {invitationData[type].addressDescription}
              </p>
              <p className="text-gray-600 text-base md:text-lg">
                {invitationData[type].location}
              </p>
            </motion.div>

            {/* Thông tin gia đình */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.8 }}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              {/* Nhà trai */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-300 pb-2">
                  Nhà trai
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Bố: Vũ Văn Phố</p>
                  <p className="font-semibold">Mẹ: Lại Thị Nhung</p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-lg font-bold text-pink-600">Chú rể: Vũ Đức Dương</p>
                  </div>
                </div>
              </div>

              {/* Nhà gái */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-pink-300 pb-2">
                  Nhà gái
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Bố: Bùi Văn Nghị</p>
                  <p className="font-semibold">Mẹ: Phạm Thị Thuý</p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-lg font-bold text-pink-600">Cô dâu: Bùi Thị Kim Ngân</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lời kết */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-light text-gray-800 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Rất hân hạnh được đón tiếp
              </p>
              <div className="w-24 h-1 bg-linear-to-r from-transparent via-pink-400 to-transparent mx-auto"></div>
            </motion.div>
          </div>
        </div>

        {/* Footer Decoration */}
        <div className="h-4 bg-linear-to-r from-pink-300 via-pink-200 to-pink-300"></div>
      </motion.div>
    </div>
  );
};

export default InvitationCard;
