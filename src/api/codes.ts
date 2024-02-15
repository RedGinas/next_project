import { useMutation, useQuery } from 'react-query';
import { axiosClient } from './axios';
import { Codes, codesUpdate } from '@/types/codes';

const useGetCodes = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getCodes'],
    queryFn: () => axiosClient.get<Codes[]>('codes').then((res) => res.data),
  });

  return { isLoading, error, data };
};

const useUpdateCodes = () => {
  const { isLoading, isSuccess, error, data, mutate } = useMutation({
    mutationKey: ['updateCodes'],
    mutationFn: (data: codesUpdate) =>
      axiosClient
        .patch<Codes>(`codes/${data.id}`, {
          isEnable: data.isEnable,
        })
        .then((res) => res.data),
  });

  return { isLoading, isSuccess, error, data, mutate };
};

export { useGetCodes, useUpdateCodes };
