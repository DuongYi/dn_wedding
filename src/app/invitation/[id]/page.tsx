'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Invitation, InvitationTypeLabel } from '@/module/invitation/models/invitation.model'
import { invitationApi } from '@/module/invitation/api/invitation.api'

const InvitationViewPage = () => {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [invitation, setInvitation] = useState<Invitation | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadInvitation = async () => {
      try {
        const found = await invitationApi.getInvitationById(id)
        setInvitation(found || null)
      } catch (error) {
        console.error('Error loading invitation:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadInvitation()
  }, [id])

  const getTypeColor = (type: number) => {
    switch (type) {
      case 0:
        return 'bg-blue-500'
      case 1:
        return 'bg-green-500'
      case 2:
        return 'bg-pink-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getTypeGradient = (type: number) => {
    switch (type) {
      case 0:
        return 'from-blue-500 to-blue-600'
      case 1:
        return 'from-green-500 to-green-600'
      case 2:
        return 'from-pink-500 to-pink-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải...</p>
        </div>
      </div>
    )
  }

  if (!invitation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Không tìm thấy thiệp</h1>
          <p className="text-gray-600 mb-6">Thiệp cưới này không tồn tại hoặc đã bị xóa.</p>
          <button
            onClick={() => router.push('/invitation-management')}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
          >
            Quay lại danh sách
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${getTypeGradient(invitation.type)} text-white py-8 shadow-lg`}>
        <div className="container mx-auto px-4">
          <button
            onClick={() => router.push('/invitation-management')}
            className="flex items-center gap-2 text-white hover:text-pink-100 mb-4 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Quay lại
          </button>
          <h1 className="text-3xl md:text-4xl font-bold">Thông tin thiệp cưới</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Invitation Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header Section */}
            <div className={`bg-gradient-to-r ${getTypeGradient(invitation.type)} p-8 text-white text-center`}>
              <div className="text-6xl mb-4">💌</div>
              <h2 className="text-3xl font-bold mb-2">{invitation.name}</h2>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                {InvitationTypeLabel[invitation.type]}
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* ID */}
                <div className="border-l-4 border-pink-500 pl-4">
                  <p className="text-sm text-gray-500 mb-1">Mã thiệp</p>
                  <p className="text-lg font-semibold text-gray-800">{invitation.id}</p>
                </div>

                {/* Name */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-sm text-gray-500 mb-1">Tên thiệp</p>
                  <p className="text-lg font-semibold text-gray-800">{invitation.name}</p>
                </div>

                {/* Type */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-500 mb-1">Loại thiệp</p>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 ${getTypeColor(invitation.type)} text-white rounded-lg text-sm font-medium`}>
                    <span className="text-lg">
                      {invitation.type === 0 ? '📅' : invitation.type === 1 ? '🌟' : '💕'}
                    </span>
                    {InvitationTypeLabel[invitation.type]}
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="mt-8 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📝</span>
                  Thông tin chi tiết
                </h3>
                <div className="space-y-3 text-gray-700">
                  {invitation.type === 0 && (
                    <>
                      <p className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span><strong>Sự kiện:</strong> Tiệc cưới nhà trai - Thứ 7</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span><strong>Thời gian:</strong> Buổi tối Thứ Bảy</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span><strong>Địa điểm:</strong> Nhà trai</span>
                      </p>
                    </>
                  )}
                  {invitation.type === 1 && (
                    <>
                      <p className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Sự kiện:</strong> Tiệc cưới nhà trai - Chủ nhật</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Thời gian:</strong> Buổi trưa Chủ Nhật</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Địa điểm:</strong> Nhà trai</span>
                      </p>
                    </>
                  )}
                  {invitation.type === 2 && (
                    <>
                      <p className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span><strong>Sự kiện:</strong> Tiệc cưới nhà gái - Chủ nhật</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span><strong>Thời gian:</strong> Buổi trưa Chủ Nhật</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span><strong>Địa điểm:</strong> Nhà gái</span>
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-4 justify-center">
                <button
                  onClick={() => router.push('/invitation-management')}
                  className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all shadow-md"
                >
                  Quay lại danh sách
                </button>
                <button
                  onClick={() => window.print()}
                  className={`px-6 py-3 bg-gradient-to-r ${getTypeGradient(invitation.type)} text-white rounded-lg hover:shadow-lg transition-all shadow-md flex items-center gap-2`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  In thiệp
                </button>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Xem trước thiệp cưới</h3>
            <div className="aspect-[3/4] bg-gradient-to-br from-pink-100 via-white to-purple-100 rounded-xl flex items-center justify-center border-2 border-dashed border-pink-300">
              <div className="text-center">
                <div className="text-6xl mb-4">💝</div>
                <p className="text-gray-500">Preview thiệp cưới sẽ hiển thị tại đây</p>
                <p className="text-sm text-gray-400 mt-2">Đang phát triển...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvitationViewPage
