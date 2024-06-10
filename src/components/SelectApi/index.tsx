'use client'

import { useState } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Apis } from '@/helper/api'

export default function SelectApi() {
  const [selectedApi, setSelectedApi] = useState<Apis>('gnews')
  console.log('🚀 ~ SelectApi ~ selectedApi:', selectedApi)

  const handleSelectChange = (value: string) => {
    setSelectedApi(value as Apis)
  }

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione Api" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gnews">Gnews</SelectItem>
        <SelectItem value="news">NewsApi</SelectItem>
      </SelectContent>
    </Select>
  )
}
