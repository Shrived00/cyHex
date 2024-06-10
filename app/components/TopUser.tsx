import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { LineChart } from 'lucide-react';

const users = [
    {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        avatarSrc: "/avatars/01.png",
        amount: "+$1,999.00",
        success: true
    },
    {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        avatarSrc: "/avatars/02.png",
        amount: "+$39.00",
        success: false
    },
    {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        avatarSrc: "/avatars/03.png",
        amount: "+$299.00",
        success: true
    },
    {
        name: "William Kim",
        email: "will@email.com",
        avatarSrc: "/avatars/04.png",
        amount: "+$99.00",
        success: false
    },
    {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        avatarSrc: "/avatars/05.png",
        amount: "+$39.00",
        success: true
    },
];

const TopUser = () => {
    return (
        <Card className='mt-4 col-span-7 xl:col-span-3'>
            <CardHeader>
                <CardTitle>Top Users</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                {users.map((user, index) => (
                    <div key={index} className="flex items-center gap-4 justify-between w-full">
                        <div className="flex gap-4 items-center">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src={user.avatarSrc} alt={user.name} />
                                <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">{user.name}</p>
                                <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                        </div>
                        <div className=" w-[40%]">
                            <div className="flex gap-3  items-center justify-between">
                                <LineChart color={user.success ? 'green' : 'red'} />
                                <div className="font-medium">{user.amount}</div>
                                <div className={`bg-${user.success ? 'green' : 'yellow'}-300 rounded-sm text-xs p-1`}>{user.success ? 'Active' : 'Process'}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default TopUser
