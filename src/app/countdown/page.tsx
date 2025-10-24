import React from "react"
import LayoutWrapper from "@/routes/layout_wrapper"
import CountDownPage from "@/module/count_down/page/count_down"

export default function CountDown() {
  return (
    <LayoutWrapper showHeader={true} headerAlwaysShow={true} showFooter={false}>
      <CountDownPage />
    </LayoutWrapper>
  )
}
