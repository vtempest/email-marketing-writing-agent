"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Plus,
  MoreHorizontal,
  ArrowUpDown,
  Search,
  Filter,
  Download,
  Upload,
  UserPlus,
  Mail,
  Phone,
  Building2,
  Sparkles,
} from "lucide-react";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  title?: string;
  company?: string;
  companyId?: string;
  status: "active" | "inactive" | "unsubscribed";
  tags: string[];
  lastContactedAt?: string;
  createdAt: string;
}

export default function ContactsPage() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

  // Sample data - replace with actual database query
  const [data] = useState<Contact[]>([
    {
      id: "1",
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@techcorp.com",
      phone: "+1 (555) 123-4567",
      title: "CEO",
      company: "TechCorp",
      companyId: "1",
      status: "active",
      tags: ["decision-maker", "tech"],
      lastContactedAt: "2024-01-15",
      createdAt: "2023-12-01",
    },
    {
      id: "2",
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.j@innovatelabs.io",
      phone: "+1 (555) 234-5678",
      title: "VP of Marketing",
      company: "InnovateLabs",
      companyId: "2",
      status: "active",
      tags: ["marketing", "b2b"],
      lastContactedAt: "2024-01-18",
      createdAt: "2023-11-15",
    },
    {
      id: "3",
      firstName: "Mike",
      lastName: "Chen",
      email: "mike.chen@futurescale.com",
      phone: "+1 (555) 345-6789",
      title: "CTO",
      company: "FutureScale",
      status: "active",
      tags: ["tech", "enterprise"],
      lastContactedAt: "2024-01-20",
      createdAt: "2023-10-20",
    },
    {
      id: "4",
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@cloudnext.io",
      title: "Head of Sales",
      company: "CloudNext",
      status: "inactive",
      tags: ["sales"],
      createdAt: "2023-09-10",
    },
    {
      id: "5",
      firstName: "Alex",
      lastName: "Brown",
      email: "alex@dataflow.com",
      phone: "+1 (555) 456-7890",
      title: "Product Manager",
      company: "DataFlow",
      status: "unsubscribed",
      tags: ["product", "saas"],
      lastContactedAt: "2023-12-15",
      createdAt: "2023-08-05",
    },
  ]);

  const columns = useMemo<ColumnDef<Contact>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => {
          const firstName = row.original.firstName;
          const lastName = row.original.lastName;
          const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();

          return (
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">
                  {firstName} {lastName}
                </div>
                <div className="text-sm text-gray-500">{row.original.email}</div>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "title",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Title
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => {
          return (
            <div>
              <div className="font-medium">{row.original.title || "—"}</div>
              {row.original.company && (
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Building2 className="h-3 w-3" />
                  {row.original.company}
                </div>
              )}
            </div>
          );
        },
      },
      {
        accessorKey: "phone",
        header: "Phone",
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-2">
              {row.original.phone ? (
                <>
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{row.original.phone}</span>
                </>
              ) : (
                <span className="text-gray-400">—</span>
              )}
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Status
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => {
          const status = row.original.status;
          const statusColors = {
            active: "bg-green-500",
            inactive: "bg-gray-500",
            unsubscribed: "bg-red-500",
          };

          return (
            <Badge className={statusColors[status]}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          );
        },
      },
      {
        accessorKey: "tags",
        header: "Tags",
        cell: ({ row }) => {
          return (
            <div className="flex flex-wrap gap-1">
              {row.original.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "lastContactedAt",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Last Contact
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => {
          const date = row.original.lastContactedAt;
          return date
            ? new Date(date).toLocaleDateString()
            : <span className="text-gray-400">Never</span>;
        },
      },
      {
        id: "actions",
        cell: ({ row }) => {
          const contact = row.original;

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(contact.email)}
                >
                  Copy email
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={`/dashboard/contacts/${contact.id}`}>
                    View details
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={`/dashboard/contacts/${contact.id}/edit`}>
                    Edit contact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Enrich with AI
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Delete contact
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      globalFilter,
    },
  });

  const selectedRows = table.getFilteredSelectedRowModel().rows.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Contacts</h1>
          <p className="text-gray-600">
            Manage your CRM contacts and relationships
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Link href="/dashboard/contacts/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Contact
            </Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Contacts ({data.length})</CardTitle>
              <CardDescription>
                {selectedRows > 0
                  ? `${selectedRows} contact(s) selected`
                  : "Search and filter your contacts"}
              </CardDescription>
            </div>
            {selectedRows > 0 && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Selected
                </Button>
                <Button variant="outline" size="sm">
                  Add to Campaign
                </Button>
                <Button variant="outline" size="sm">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Enrich All
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search contacts by name, email, company..."
                value={globalFilter ?? ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <UserPlus className="mb-2 h-8 w-8 text-gray-400" />
                        <p className="text-sm text-gray-500">
                          No contacts found. Add your first contact to get started.
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between space-x-2 py-4">
            <div className="text-sm text-gray-500">
              {selectedRows > 0
                ? `${selectedRows} of ${table.getFilteredRowModel().rows.length} row(s) selected`
                : `${table.getFilteredRowModel().rows.length} total contacts`}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <div className="text-sm">
                Page {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
