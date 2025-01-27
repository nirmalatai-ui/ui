import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/Ekjotsinghmakhija.png" alt="@Ekjotsinghmakhija" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
