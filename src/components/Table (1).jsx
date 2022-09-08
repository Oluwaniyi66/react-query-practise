import * as React from 'react'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import { Table as MuiTable } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import MoreVert from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'

import EmptyTable from '@ikw/components/common/EmptyTable'

export default function Table({
  results,
  columns,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  rowsPerPage,
  handleRowClick,
  moreMenu,
  handleMenu,
  emptyIconTitle,
  emptyIconMessage,
  fixedColumn,
}) {
  return (
    <Paper sx={{ width: '100%' }} elevation={0}>
      <TableContainer>
        <MuiTable stickyHeader>
          <TableHead>
            <TableRow>
              <>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{
                      background: '#FFF',
                      '&:nth-child(1)': {
                        minWidth: results.length > 0 ? column.minWidth : 'unset',
                        position: fixedColumn && 'sticky',
                        left: fixedColumn && 0,
                        borderRight: results.length > 0 && fixedColumn && '2px solid #E7E7ED',
                        boxShadow: fixedColumn && '0px 0px 0px rgb(0 0 0 / 10%), 0px 0px 0px 1px rgb(0 0 0 / 1%)',
                        background: '#FFF',
                        paddingRight: fixedColumn && '50px !important',
                        zIndex: fixedColumn && 4,
                      },
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                {moreMenu && (
                  <TableCell
                    sx={{
                      background: '#FFF',
                      borderBottom: 'none',
                    }}
                  />
                )}
              </>
            </TableRow>
          </TableHead>
          {results.length > 0 ? (
            <TableBody>
              {results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow
                    // hover
                    role='checkbox'
                    tabIndex={-1}
                    key={row.code}
                    onClick={() => handleRowClick(row)}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        background: '#FAF9F8',
                      },
                    }}
                  >
                    {columns.map((column) => {
                      let value
                      if (column.isDeep) {
                        const [val1, val2] = column.key.split('.')
                        value = row[val1][val2]
                      } else {
                        value = row[column.key]
                      }
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            fontWeight: 100,
                            minWidth: column.minWidth ?? 'unset',
                            border: 'none !important',
                            '&:nth-child(1)': {
                              position: fixedColumn && 'sticky',
                              left: fixedColumn && 0,
                              // boxShadow: fixedColumn && '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
                              background: fixedColumn && '#FFF',
                              '&:hover': {
                                background: '#FAF9F8',
                              },
                            },
                          }}
                        >
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                    {moreMenu && (
                      <TableCell sx={{ border: 'none !important' }}>
                        <IconButton onClick={(event) => handleMenu(event, row)}>
                          <MoreVert />
                        </IconButton>
                      </TableCell>
                    )}
                  </TableRow>
                )
              })}
            </TableBody>
          ) : (
            <EmptyTable title={emptyIconTitle} message={emptyIconMessage} />
          )}
        </MuiTable>
      </TableContainer>
      {results.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={results.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  )
}

Table.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape).isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleRowClick: PropTypes.func,
  moreMenu: PropTypes.bool,
  handleMenu: PropTypes.func,
  emptyIconTitle: PropTypes.string,
  emptyIconMessage: PropTypes.string,
  fixedColumn: PropTypes.bool,
}

Table.defaultProps = {
  handleRowClick: () => {},
  moreMenu: false,
  handleMenu: () => {},
  fixedColumn: false,
  emptyIconMessage: '',
  emptyIconTitle: '',
}
