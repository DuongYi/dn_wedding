"use client"

import React, { useState, useEffect } from 'react'
import { Invitation, InvitationTypeLabel } from '../models/invitation.model'
import { invitationApi } from '../api/invitation.api'
import InvitationCardItem from '../components/invitation_card_item'

const InvitationManagement: React.FC = () => {
  const [invitations, setInvitations] = useState<Invitation[]>([])
  const [filteredInvitations, setFilteredInvitations] = useState<Invitation[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [editingInvitation, setEditingInvitation] = useState<Invitation | null>(null)
  const [formData, setFormData] = useState({ name: '', type: 0 })

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  // Load invitations
  useEffect(() => {
    loadInvitations()
  }, [])

  // Filter invitations based on search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredInvitations(invitations)
    } else {
      const filtered = invitations.filter(inv =>
        inv.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredInvitations(filtered)
    }
    // Reset to first page when search changes
    setCurrentPage(1)
  }, [searchQuery, invitations])

  // Calculate pagination
  const totalPages = Math.ceil(filteredInvitations.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentInvitations = filteredInvitations.slice(startIndex, endIndex)
  const totalItems = filteredInvitations.length

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value)
    setCurrentPage(1)
  }

  const loadInvitations = async () => {
    setIsLoading(true)
    const data = await invitationApi.getAllInvitations()
    setInvitations(data)
    setFilteredInvitations(data)
    setIsLoading(false)
  }

  const handleCreate = () => {
    setEditingInvitation(null)
    setFormData({ name: '', type: 0 })
    setShowCreateDialog(true)
  }

  const handleEdit = (invitation: Invitation) => {
    setEditingInvitation(invitation)
    setFormData({ name: invitation.name, type: invitation.type })
    setShowCreateDialog(true)
  }

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa thiệp này?')) {
      await invitationApi.deleteInvitation(id)
      loadInvitations()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (editingInvitation) {
      await invitationApi.updateInvitation(editingInvitation.id, formData)
    } else {
      await invitationApi.createInvitation(formData)
    }
    setShowCreateDialog(false)
    loadInvitations()
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Quản lý thiệp mời</h1>
          <p className="text-gray-600">Tạo và quản lý các thiệp mời cho đám cưới của bạn</p>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm thiệp..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Create Button */}
            <button
              onClick={handleCreate}
              className="flex items-center gap-2 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 whitespace-nowrap"
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Tạo thiệp mới
            </button>
          </div>
        </div>

        {/* Table View - Desktop */}
        <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">STT</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tên Thiệp</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Loại Thiệp</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    Đang tải...
                  </td>
                </tr>
              ) : filteredInvitations.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    Không tìm thấy thiệp nào
                  </td>
                </tr>
              ) : (
                currentInvitations.map((invitation, index) => (
                  <tr key={invitation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-600">{startIndex + index + 1}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{invitation.name}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${invitation.type === 0 ? 'bg-blue-100 text-blue-700' :
                        invitation.type === 1 ? 'bg-green-100 text-green-700' :
                          'bg-pink-100 text-pink-700'
                        }`}>
                        {InvitationTypeLabel[invitation.type]}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => handleEdit(invitation)}
                          className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"
                          title="Sửa"
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
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(invitation.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                          title="Xóa"
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination - Desktop */}
        {!isLoading && filteredInvitations.length > 0 && (
          <div className="hidden md:flex items-center justify-between bg-white rounded-xl shadow-sm p-4 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Tổng số: <span className="font-semibold">{totalItems}</span> thiệp
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Hiển thị:</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
                <span className="text-sm text-gray-600">mục/trang</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${currentPage === 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
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
              </button>

              {/* Page Numbers */}
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 rounded-lg text-sm ${currentPage === page
                            ? 'bg-pink-500 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                          }`}
                      >
                        {page}
                      </button>
                    )
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span key={page} className="px-2 py-1 text-gray-400">
                        ...
                      </span>
                    )
                  }
                  return null
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${currentPage === totalPages
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Card View - Mobile */}
        <div className="md:hidden grid gap-4">
          {isLoading ? (
            <div className="text-center py-8 text-gray-500">Đang tải...</div>
          ) : filteredInvitations.length === 0 ? (
            <div className="text-center py-8 text-gray-500">Không tìm thấy thiệp nào</div>
          ) : (
            currentInvitations.map((invitation) => (
              <InvitationCardItem
                key={invitation.id}
                invitation={invitation}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        {/* Pagination - Mobile */}
        {!isLoading && filteredInvitations.length > 0 && (
          <div className="md:hidden flex flex-col gap-4 bg-white rounded-xl shadow-sm p-4 mt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Tổng: <span className="font-semibold">{totalItems}</span>
              </span>
              <div className="flex items-center gap-2">
                <select
                  value={itemsPerPage}
                  onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                  className="px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
                <span className="text-sm text-gray-600">/ trang</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${currentPage === 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
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
              </button>

              <span className="text-sm text-gray-600">
                Trang {currentPage} / {totalPages}
              </span>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${currentPage === totalPages
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Create/Edit Dialog */}
      {showCreateDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {editingInvitation ? 'Chỉnh sửa thiệp' : 'Tạo thiệp mới'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tên thiệp
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="VD: Thiệp gia đình bà Phương"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loại thiệp
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value={0}>Thiệp nhà trai - Thứ 7</option>
                  <option value={1}>Thiệp nhà trai - Chủ nhật</option>
                  <option value={2}>Thiệp nhà gái - Chủ nhật</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowCreateDialog(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                >
                  {editingInvitation ? 'Cập nhật' : 'Tạo mới'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default InvitationManagement
