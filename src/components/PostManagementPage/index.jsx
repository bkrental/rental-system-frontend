"use client";
import { useDeletePostMutation, useGetMyPropertiesQuery } from "@/redux/features/landlord/api";
import { DeleteOutline, EditNoteOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { Box, Chip, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import NoRowsOverlay from "./components/NoRowsOverlay";
import ActionButtons from "./components/ActonButtons";

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "postId", headerName: "Post ID", width: 0 },
  {
    field: "thumbnail",
    headerName: "Thumbnail",
    width: 120,
    renderCell: (params) => (
      <img width={100} height={100} style={{ paddingTop: 10, paddingBottom: 10 }} src={params.value} />
    ),
  },
  {
    field: "name",
    headerName: "Title",
    width: 400,
    renderCell: (params) => <div className="titleCell">{params.value}</div>,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => <Chip label={params.value} color="success" variant="outlined" />,
  },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    width: 150,
    renderCell: (params) => {
      return <ActionButtons postId={params.row.postId} refetch={() => {}} />;
    },
    disableClickEventBubbling: true,
  },
];

const PostManagementPage = () => {
  const [pagination, setPagination] = useState({
    pageSize: 5,
    page: 0,
  });

  const { data, error, isLoading, refetch } = useGetMyPropertiesQuery({
    page: pagination.page + 1,
    limit: pagination.pageSize,
  });

  useEffect(() => {
    window.addEventListener("post-deleted", refetch);

    return () => {
      window.removeEventListener("post-deleted", refetch);
    };
  }, [refetch]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  const rows = (data?.properties ?? []).map((property, index) => ({
    id: index + 1 + pagination.page * pagination.pageSize,
    postId: property._id,
    thumbnail: property.thumbnail,
    name: property.name,
    status: "Active",
  }));

  return (
    <Box sx={{ width: "100%", height: "calc(100vh - 60px)", overflow: "auto", px: 4, pt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Posts
      </Typography>

      <DataGrid
        initialState={{
          columns: {
            columnVisibilityModel: {
              postId: false,
            },
          },
        }}
        columns={columns}
        rows={rows}
        rowCount={data?.pagination?.total_records ?? 0}
        rowHeight={100}
        autoHeight
        paginationModel={pagination}
        paginationMode="server"
        onPaginationModelChange={setPagination}
        checkboxSelection
        slots={{ noRowsOverlay: NoRowsOverlay }}
        sx={{ "--DataGrid-overlayHeight": "350px" }}
      />
    </Box>
  );
};

export default PostManagementPage;
