"use client"

import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
function AppSkeleton() {
  return (
    <Stack>
      <Skeleton height='200px' borderRadius='lg' />

    </Stack>
  )
}

export default AppSkeleton