import { useSubmittedDynamicFormsList } from "@app/hooks";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const SubmittedFormListPage = () => {
  const [submittedForms, { isLoading }] = useSubmittedDynamicFormsList();
  const columns: GridColDef[] = submittedForms.columns.map((col) => ({
    field: col,
    headerName: col,
    width: 150,
  }));

  return (
    <section className="mt-2">
      <DataGrid
        rows={submittedForms.data}
        loading={isLoading}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      <div className="mt-10">
        <p>
          The table features sortable and resizable columns. Additionally, each
          column includes a menu that allows data filtering.
        </p>
        <p>
          Columns can be shown or hidden using the "Manage Columns" option
          available for each column.
        </p>
      </div>
    </section>
  );
};

export default SubmittedFormListPage;
