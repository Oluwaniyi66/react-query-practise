import * as React from 'react'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { Table as MuiTable } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import { ReactComponent as NoSubject } from '@ikw/assets/noSubject.svg'

import EmptyTable from '@ikw/components/common/EmptyTable'

const Table = ({
  results,
  columns,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  rowsPerPage,
  handleRowClick,
  emptyIconTitle,
  emptyIconMessage,
  fixedColumn,
}) => {
  return (
    <Paper sx={{ width: '100%' }} elevation={0}>
      <TableContainer sx={{ maxHeight: 1920, minheight: 1300 }}>
        <MuiTable stickyHeader sx={{ minWidth: 500 }}>
          <TableHead>
            <TableRow>
              <>
                {columns.map((column) => (
                  <>
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{
                        background: '#FAF9F8',
                        minWidth: column.minWidth,
                        fixedColumn,
                        fontSize: '2.vw',
                        fontWeight: 400,
                        padding: '2vh 0 2vh 2vh',
                      }}
                    >
                      <Box style={{ fontSize: '2.4vw', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        {column.label}
                        <ArrowDownwardIcon sx={{ margin: '4px 0 0 0' }} />
                      </Box>
                    </TableCell>
                  </>
                ))}
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
                          sx={{ fontSize: '2.4vw', fontWeight: 400, minWidth: column.minWidth, padding: '2vh 3vh 2vh 2vh' }}
                        >
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          ) : (
            <EmptyTable icon={<NoSubject />} title='No Student Activity' content='You currently do not have any activity' />
          )}
        </MuiTable>
      </TableContainer>
      {results.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100, { label: 'All', value: -1 }]}
          component='div'
          count={results.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          fixedColumn
          colSpan={3}
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
  handleMenu: PropTypes.func,
  emptyIconTitle: PropTypes.string,
  emptyIconMessage: PropTypes.string,
  fixedColumn: PropTypes.string,
}

Table.defaultProps = {
  handleRowClick: () => {},
  handleMenu: () => {},
  emptyIconMessage: '',
  emptyIconTitle: '',
  fixedColumn: '',
}

export default Table
