"use client"

import React from 'react'

interface WeddingGiftDialogProps {
  isOpen: boolean
  onClose: () => void
}

const WeddingGiftDialog: React.FC<WeddingGiftDialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop - Black blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Dialog - Centered, Compact */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 scrollbar-hide">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
          aria-label="Đóng"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content Container */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            {/* <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-12 h-12 md:w-16 md:h-16 text-pink-500"
              >
                <path
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-felidae mb-2">
              Mừng Cưới
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Cảm ơn bạn đã dành tình cảm cho chúng mình
            </p>
          </div>
          {/* QR Codes Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Cô Dâu - Bride */}
            <div className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-pink-500"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div> */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                  Cô Dâu
                </h3>
                <p className="text-pink-600 font-semibold text-lg">
                  Kim Ngân
                </p>
              </div>

              {/* QR Code Placeholder */}
              <div className="bg-white rounded-2xl p-4 mb-4 shadow-inner">
                <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                  {/* Replace this div with actual QR code component */}
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="w-16 h-16 mx-auto mb-2 text-gray-300"
                    >
                      <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
                      <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
                      <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
                      <rect x="14" y="14" width="7" height="7" strokeWidth="2" />
                    </svg>
                    <p className="text-sm text-gray-400 font-medium">QR Code Cô Dâu</p>
                  </div>
                </div>
              </div>

              {/* Bank Info */}
              <div className="bg-white/70 backdrop-blur rounded-2xl p-4 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Ngân hàng:</span>
                  <span className="font-semibold text-gray-800">MB Bank</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Số tài khoản:</span>
                  <span className="font-semibold text-gray-800">0123456789</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Chủ tài khoản:</span>
                  <span className="font-semibold text-gray-800">Nguyễn Kim Ngân</span>
                </div>
              </div>
            </div>

            {/* Chú Rể - Groom */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-blue-500"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div> */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                  Chú Rể
                </h3>
                <p className="text-blue-600 font-semibold text-lg">
                  Đức Dương
                </p>
              </div>

              {/* QR Code Placeholder */}
              <div className="bg-white rounded-2xl p-4 mb-4 shadow-inner">
                <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                  {/* Replace this div with actual QR code component */}
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="w-16 h-16 mx-auto mb-2 text-gray-300"
                    >
                      <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
                      <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
                      <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
                      <rect x="14" y="14" width="7" height="7" strokeWidth="2" />
                    </svg>
                    <p className="text-sm text-gray-400 font-medium">QR Code Chú Rể</p>
                  </div>
                </div>
              </div>

              {/* Bank Info */}
              <div className="bg-white/70 backdrop-blur rounded-2xl p-4 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Ngân hàng:</span>
                  <span className="font-semibold text-gray-800">Vietcombank</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Số tài khoản:</span>
                  <span className="font-semibold text-gray-800">9876543210</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Chủ tài khoản:</span>
                  <span className="font-semibold text-gray-800">Nguyễn Đức Dương</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-3 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-amber-600"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.003-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              <span className="text-amber-800 font-medium text-sm">
                Trân trọng cảm ơn tấm lòng của bạn!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeddingGiftDialog
