import { Button } from "../ui/button"
import { Card, CardTitle, CardDescription, CardHeader } from "../ui/card"  

type UserCardProps ={
    avatarUrl:string,
    name:string,
    bio:string,
    url:string,
}

function UserCard({avatarUrl,name, bio, url}: UserCardProps) {
  return (
    <Card className="w-full lg:w-1/2 mb-8">
        <CardHeader className="flex-row gap-x-8 items-center">
            <img src={avatarUrl} alt="avatarUrl" 
            className="w-36 h-36 rounded object-cover"
             />
             <div className="flex flex-col gap-y-2 ">
                <CardTitle>{name || 'Name is not there'}</CardTitle>
                <CardDescription>
                    {bio || 'passionate about coding and tech'}
                </CardDescription>
                <Button asChild size='sm' className="w-1/2 mt-2">
                    <a href={url} target="_blank" rel="noreferrer">
                        Follow
                    </a>
                </Button>
             </div>
        </CardHeader>
    </Card>
  )
}
export default UserCard