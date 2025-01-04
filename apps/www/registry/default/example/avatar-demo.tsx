import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/nirmalatai.png" alt="@nirmalatai" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
