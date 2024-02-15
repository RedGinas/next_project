import {
  Box,
  CircularProgress,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useGetCodes } from '@/api/codes';
import CodesTableRow from '../components/CodesTableRow';

const CodesPage = (): React.ReactElement => {
  const { isLoading, data: codes, error } = useGetCodes();

  const [snackbarState, setSnackbarState] = useState({
    isOpen: false,
    message: 'Fail to load data',
  });

  useEffect(() => {
    if (error) {
      setSnackbarState({ isOpen: true, message: 'Fail to load data' });
    }
  }, [error]);

  const handleClose = () => {
    setSnackbarState({ ...snackbarState, isOpen: false });
  };

  const onUpdateError = (element: string) => {
    setSnackbarState({ isOpen: true, message: `Fail to update ${element}` });
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <Table size="small" sx={{ overflowX: 'clip', overflowY: 'scroll' }}>
        <TableHead>
          <TableRow>
            <TableCell>Alphabetic Code</TableCell>
            <TableCell align="left">Entity</TableCell>
            <TableCell align="left">Currency</TableCell>
            <TableCell align="left">Enable/Disable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {codes?.map((el) => (
            <CodesTableRow
              key={el.id}
              data={el}
              onUpdateError={onUpdateError}
            />
          ))}
        </TableBody>
      </Table>
      <Snackbar
        open={snackbarState.isOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        message={snackbarState.message}
        key="top center"
      />
    </div>
  );
};

export default CodesPage;
