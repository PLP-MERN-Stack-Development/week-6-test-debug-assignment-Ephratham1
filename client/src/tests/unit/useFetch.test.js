import { renderHook } from '@testing-library/react';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';

jest.mock('axios');

describe('useFetch hook', () => {
  it('fetches data successfully', async () => {
    axios.get.mockResolvedValue({ data: { message: 'success' } });

    const { result, waitForNextUpdate } = renderHook(() => useFetch('/api/test'));

    await waitForNextUpdate();

    expect(result.current.data).toEqual({ message: 'success' });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});
