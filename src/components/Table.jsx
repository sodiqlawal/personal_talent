import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import EnhancedTableToolbar from "./Toolbar";
import FilterShow from "./FilterShow";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import EnhancedTableHead from "./EnhancedTableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableCell, Checkbox } from "@material-ui/core";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "2.5rem",
    maxHeight: "fit-content"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    padding: "30px"
  },
  headCells: {
    color: "yellow",
    fontSize: "19px"
  },
  table: {
    minWidth: 750
    // width:"1400px"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  profileImg: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "5px"
  },
  profile: {
    display: "flex",
    alignItems: "center"
  },
  button: {
    marginLeft: "4rem"
  },

  bottomRowDisplay:{
    marginTop: "2.5rem",
    marginLeft: "2rem",
    position: "absolute",
    color: "#0D64C9",
    fontSize: "16px",

    [theme.breakpoints.down("sm")]: {
      position:"relative",
      marginLeft:"1rem"
    },
  },

  pagination: {
    marginTop: "1.7rem", marginRight: "5rem", color: "#0D64C9",

    [theme.breakpoints.down("sm")]: {
      marginTop:"0.5rem",
      marginRight:"0.5rem"
    },
  }
}));

export default function EnhancedTable(props) {
  const heading = props.heading;
  const headCells = props.headCells;
  const rows = props.rows;
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [showFilter, setShowFilter] = React.useState(false);

  const displayFilter = () => setShowFilter(prevState => !prevState);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    console.log(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const isSelected = id => selected.indexOf(id) !== -1;

  return (
    <div className={classes.root}>
      <div className={classes.button}>
        <button
          className="btn px-3"
          onClick={displayFilter}
          style={{
            background: "#268AFF",
            color: "#ffffff",
            fontSize: "19px",
            width: "96px",
            height: "42px",
            borderRadius: "7px",
            boxShadow: "0px 2px 4px #00000020",
            borderWidth:"0",
          }}
        >
          Filter
          <span className="ml-2">&#9660;</span>
        </button>
        <button
          className="btn ml-4 px-4"
          style={{
            background: "#B5D7FF",
            color: "#268AFF",
            fontSize: "19px",
            width: "96px",
            height: "42px",
            borderRadius: "7px",
            boxShadow: "0px 2px 4px #00000020",
            borderWidth:"0",
            marginLeft:"2rem"
          }}
        >
          Export
        </button>
      </div>
      {/* {showFilter && <FilterShow />} */}
      <Paper
        className={classes.paper}
        style={{
          minHeight: props.dashboardItem ? null : "70vh",
          maxHeight: props.dashboardItem ? "700px" : null,
          overflow: props.dashboardItem ? "auto" : null
        }}
      >
        {props.showToolbar ? (
          <EnhancedTableToolbar heading={heading} showView={true} />
        ) : null}
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
              showCheck={props.showCheck}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={
                        props.showCheck
                          ? event => handleClick(event, row.id)
                          : null
                      }
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >
                      {props.showCheck ? (
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                      ) : null}
                      {Object.values(row)
                        .slice(1)
                        .map((val, ind) => (
                          <TableCell
                            align="left"
                            key={ind}
                            style={{ color:"#4B4B4B", fontSize: "17px" }}
                          >
                            {val === "Active" ? (
                              <div
                                style={{
                                  backgroundColor: "#09a23c",
                                  color: "white",
                                  borderRadius: "10px",
                                  width: "100px",
                                  padding: "0.5rem 2rem"
                                }}
                              >
                                Active
                              </div>
                            ) : val === "Deactivated" ? (
                              <div
                                style={{
                                  backgroundColor: "#de1325",
                                  color: "white",
                                  borderRadius: "10px",
                                  width: "130px",
                                  padding: "0.5rem 2rem"
                                }}
                              >
                                Deactivated
                              </div>
                            ) : val === "Pending" ? (
                              <div
                                style={{
                                  backgroundColor: "#ffc260",
                                  color: "white",
                                  borderRadius: "10px",
                                  width: "130px",
                                  padding: "0.5rem 2rem"
                                }}
                              >
                                Pending
                              </div>
                            ) : val === "Completed" ? (
                              <div
                                style={{
                                  backgroundColor: "#09a23c",
                                  color: "white",
                                  borderRadius: "10px",
                                  width: "130px",
                                  padding: "0.5rem 2rem"
                                }}
                              >
                                Completed
                              </div>
                            ) : val === "Approved" ? (
                              <div
                                style={{
                                  backgroundColor: "#09a23c",
                                  color: "white",
                                  borderRadius: "10px",
                                  width: "130px",
                                  padding: "0.5rem 2rem"
                                }}
                              >
                                Approved
                              </div>
                            ) : val === "user" ? (
                              <div className={classes.profile}>
                                <img
                                  className={classes.profileImg}
                                  src={val[1]}
                                  alt=""
                                />{" "}
                                <div>{val[0]}</div>{" "}
                              </div>
                            ) : (
                              val
                            )}
                          </TableCell>
                        ))}
                      <TableCell align="left">{props.actionButton}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <p
           className={classes.bottomRowDisplay}
        >
          Displaying{" "}
          <span style={{ borderBottom: "1px solid #0D64C9" }}>
            {rowsPerPage}
          </span>{" "}
          of 8
        </p>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          className={classes.pagination}
        />
      </Paper>
    </div>
  );
}
