import React from 'react';
import Image from "next/image";
import { CheckSquare, MoreHorizontal, Pencil, SquareCheck, Trash } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// Sample data separated from the component
const sampleProducts = [
    {
        productId: "001",
        orderId: "ORD001",
        billingName: "John Doe",
        ipAddress: "192.168.1.1",
        orderDate: "12 Jul, 2023",
        paymentMethod: "Credit Card",
        total: "$499.99",
        status: "Draft"
    },
    {
        productId: "002",
        orderId: "ORD002",
        billingName: "Jane Smith",
        ipAddress: "192.168.1.2",
        orderDate: "18 Oct, 2023",
        paymentMethod: "PayPal",
        total: "$129.99",
        status: "Active"
    },
    {
        productId: "003",
        orderId: "ORD003",
        billingName: "Alice Johnson",
        ipAddress: "192.168.1.3",
        orderDate: "20 Nov, 2023",
        paymentMethod: "Bitcoin",
        total: "$799.99",
        status: "Pending"
    },
    {
        productId: "004",
        orderId: "ORD004",
        billingName: "Bob Wilson",
        ipAddress: "192.168.1.4",
        orderDate: "05 Dec, 2023",
        paymentMethod: "Credit Card",
        total: "$299.99",
        status: "Active"
    },
];


const TransactionTable = () => {
    return (
        <Card className='mt-3'>
            <CardHeader>
                <CardTitle>Latest Transsaction</CardTitle>

            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow className=''>
                            <TableHead className="hidden w-[70px] sm:table-cell">
                                <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead className='font-semibold text-black text-lg'>Order ID</TableHead>
                            <TableHead className='font-semibold text-black text-lg'>Billing Name</TableHead>
                            <TableHead className="hidden md:table-cell font-semibold text-black text-lg">IP Address</TableHead>
                            <TableHead className='font-semibold text-black text-lg'>Order Date</TableHead>
                            <TableHead className='font-semibold text-black text-lg'>Payment Method</TableHead>
                            <TableHead className="hidden md:table-cell font-semibold text-black text-lg">Total</TableHead>
                            <TableHead className="hidden md:table-cell font-semibold text-black text-lg">Status</TableHead>
                            <TableHead className='font-semibold text-black text-lg'>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sampleProducts.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell className="hidden sm:table-cell">
                                    <SquareCheck />
                                </TableCell>
                                <TableCell className="font-medium">{product.orderId}</TableCell>
                                <TableCell>{product.billingName}</TableCell>
                                <TableCell className="hidden md:table-cell">{product.ipAddress}</TableCell>
                                <TableCell>{product.orderDate}</TableCell>
                                <TableCell>{product.paymentMethod}</TableCell>
                                <TableCell className="hidden md:table-cell">{product.total}</TableCell>
                                <TableCell className="hidden md:table-cell">{product.status}</TableCell>
                                <TableCell>
                                    <div className="flex gap-4 items-center justify-center">
                                        <div className="bg-green-500 p-2 rounded-md text-white"><Pencil /></div>
                                        <div className="bg-red-500 p-2 rounded-md text-white"><Trash /></div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>{sampleProducts.length}</strong> products
                </div>
            </CardFooter>
        </Card>
    );
};

export default TransactionTable;