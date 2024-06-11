'use client'

import { useRouter, usePathname } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function SelectApi() {
  const pathname = usePathname()
  const router = useRouter()

  const handleSelectChange = (value: string) => {
    router.replace(`${pathname}?api=${value}`)
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
