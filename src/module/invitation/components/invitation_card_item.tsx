"use client"

import React, { useState } from 'react'
import { Invitation, InvitationTypeLabel } from '../models/invitation.model'

interface InvitationCardItemProps {
  invitation: Invitation
  onEdit: (invitation: Invitation) => void
  onDelete: (id: string) => void
  onView: (invitation: Invitation) => void
}

const InvitationCardItem: React.FC<InvitationCardItemProps> = ({ invitation, onEdit, onDelete, onView }) => {
  const [showActions, setShowActions] = useState(false)

  const getTypeColor = (type: number) => {
    switch (type) {
      case 0:
        return 'bg-blue-50 border-blue-200 text-blue-700'
      case 1:
        return 'bg-green-50 border-green-200 text-green-700'
      case 2:
        return 'bg-pink-50 border-pink-200 text-pink-700'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700'
    }
  }

  return (
    <div
      className="relative bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg cursor-pointer"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Card Content */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {invitation.name}
        </h3>
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(invitation.type)}`}>
          {InvitationTypeLabel[invitation.type]}
        </div>
      </div>

      {/* Action Buttons */}
      {showActions && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent p-4 rounded-b-xl">
          <div className="flex gap-2 justify-end">
            {/* View Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                onView(invitation)
              }}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Xem
            </button>

            {/* Edit Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                onEdit(invitation)
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Sửa
            </button>

            {/* Delete Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                onDelete(invitation.id)
              }}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Xóa
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default InvitationCardItem
