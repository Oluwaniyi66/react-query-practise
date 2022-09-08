import React, { useState, useCallback } from 'react'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import useModal from '@ikw/hooks/useModal'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'

import BreadcrumbPath from '@ikw/components/common/BreadcrumbPath.js'
import Button from '@ikw/components/common/Button/Button'
import avatarColor from '@ikw/components/common/avatarColor'
import { AdminData, AdminColumns } from '.mock/mock'

import Table from './components/Table'
import Menu from './components/Menu'
import Filter from './components/FilterBoxes/Filter'
import AdminDrawer from './components/Drawer/AdminDrawer'

import DeactivateModal from '@ikw/views/Dashboard/Administration/components/Modal/DeactivateModal/DeactivateModal'
import SuccessModal from './components/Modal/SuccessModal/SuccessModal'

function Administration(props) {
  const theme = useTheme()
  const [modal, setModal] = useModal()
  const [modalOpen, setModalOpen] = useState()
  const pagePath = props.pagePath
  const [anchorEl, setAnchorEl] = useState(null)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [, setFilterValue] = useState(AdminData)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleCloseMoreMenu = () => {
    setAnchorEl(null)
  }

  const handleEdit = () => {}

  const handleOpen = () => {
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
  }

  const handleDeactivate = useCallback(() => {
    setAnchorEl(null)
    setModal({
      ...modal,
      modalName: 'deactivateModal',
      title: 'Deactivate Admin',
      message: 'Are you sure you want to deactivate this admin?',
      message2: 'Admin would be deactivated',
    })
  }, [modal, setModal])

  // const handleViewAdmin = (row) => {
  //   navigate(`/admin/view/${row.id}`)
  // }

  const handleOpenMore = (event) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClick = (key) => {
    switch (key) {
      case 'Active': {
        setFilterValue(AdminData?.filter((v) => v.status === key))
        break
      }
      case 'Deactivated': {
        setFilterValue(AdminData?.filter((v) => v.status === key))
        break
      }
      default:
        break
    }
  }

  function createData({ id, name, role, email, lastActive, status }) {
    return {
      id,
      name: (
        <Box display='flex' alignItems='center' justifyContent='flex-start'>
          <Avatar {...avatarColor(name)} />
          <Box ml={2}>
            <Typography fontWeight={400} sx={{ fontSize: '14px', color: theme.palette.text.primary }} textTransform='capitalize'>
              {name || '-'}
            </Typography>
          </Box>
        </Box>
      ),
      status: (
        <Chip
          label={status === 'ACTIVE' ? 'Active' : 'Deactivated'}
          size='small'
          sx={{
            backgroundColor: status === 'ACTIVE' ? '#D4F7DC' : '#E5E5EA',
            color: status === 'ACTIVE' ? '#15692A' : '#1E0A3C',
            borderRadius: '4px',
          }}
        />
      ),
      role,
      email,
      lastActive,
    }
  }

  const list = AdminData?.map(
    ({ id, name, role, email, lastActive, status }) =>
      createData({
        id,
        name,
        role,
        email,
        lastActive,
        status,
      }) || []
  )

  return (
    <Box p='18px 10%' bgcolor='#FFF' height='100vh'>
      <Box display='flex' alignItems='flex-start' justifyContent='space-between'>
        <BreadcrumbPath pagePath={pagePath} />
        <Box>
          <Button onClick={handleOpen}>Add Admin</Button>
        </Box>
        <AdminDrawer open={modalOpen} toggle={handleClose} anchor width headerTitle={'Add Admin'} />
      </Box>
      <Box mt={3} ml={1} mb={6} width='85%' borderRadius={5}>
        <Filter menuActionClick={handleMenuClick} />
        <InputBase
          placeholder='Search…'
          sx={{ border: ' 1px solid #CDCED9', borderRadius: 4, mt: 2, pl: 2, flex: 2, width: '45%' }}
          endAdornment={<SearchIcon sx={{ mr: 2 }} />}
        />
      </Box>
      <Table
        emptyIconTitle='No Admin'
        emptyIconMessage='You currently do not have any Admin set up'
        results={list || []}
        columns={AdminColumns}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        handleRowClick={() => {}}
        handleMenu={handleOpenMore}
        moreMenu
      />
      <Menu
        handlePopeverClose={handleCloseMoreMenu}
        anchorEl={anchorEl}
        sx={{ borderRadius: 5 }}
        menuItems={[
          {
            className: 'other',
            name: 'Edit User',
            action: handleEdit,
          },
          {
            className: 'delete',
            name: 'Deactivate User',
            action: handleDeactivate,
          },
        ]}
      />
      <DeactivateModal />
      <SuccessModal />
    </Box>
  )
}

export default Administration
