import { apiSlice } from '../api/apiSlice';
import { setUsers } from './userSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setUsers(result.data));
      },
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
