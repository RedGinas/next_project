'use client';
import { useUpdateCodes } from '@/api/codes';
import { Codes } from '@/types/codes';
import {
  Box,
  CircularProgress,
  Switch,
  TableCell,
  TableRow,
} from '@mui/material';
import React, { memo, useEffect, useState } from 'react';

interface IProps {
  data: Codes;
  onUpdateError: (element: string) => void;
}

const CodesTableRow = ({ data, onUpdateError }: IProps) => {
  const {
    isLoading,
    data: mutationData,
    isSuccess,
    error,
    mutate,
  } = useUpdateCodes();

  const [checked, setChecked] = useState(data.isEnable);

  useEffect(() => {
    if (error) {
      onUpdateError(data.entity);
    }
  }, [error]);

  useEffect(() => {
    if (mutationData && isSuccess) {
      setChecked(mutationData.isEnable);
    }
  }, [isSuccess, mutationData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    mutate({ isEnable: event.target.checked, id: data.id });
  };

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="left">
        <Box>{data.alphabeticCode}</Box>
      </TableCell>
      <TableCell align="left">
        <Box sx={{ textTransform: 'capitalize' }}>{data.entity}</Box>
      </TableCell>
      <TableCell align="left">
        <Box>{data.currency}</Box>
      </TableCell>
      <TableCell align="left">
        {isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Switch onChange={handleChange} checked={checked} />
        )}
      </TableCell>
    </TableRow>
  );
};

export default memo(CodesTableRow);
