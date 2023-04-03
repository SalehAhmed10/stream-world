"use client"
import SidebarWithHeader from '@/Components/Headers/SidebarWithHeader'
import React from 'react'

export default function SearchLayout({children}) {
  return (
    <div>
        <SidebarWithHeader>
        {children}
        </SidebarWithHeader>
    </div>
  )
}
