import React from "react"
import LayoutWrapper from "@/routes/layout_wrapper"
import PhotoAlbumPage from "@/module/photo_album/page/photo_album"

export default function PhotoAlbum() {
  return (
    <LayoutWrapper showHeader={true} headerAlwaysShow={true} showFooter={false}>
      <PhotoAlbumPage />
    </LayoutWrapper>
  )
}
