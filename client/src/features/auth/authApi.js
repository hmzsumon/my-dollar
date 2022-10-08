import { apiSlice } from '../api/apiSlice';
import { logoutUser } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // register user
    register: builder.mutation({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
        config: { headers: { 'Content-Type': 'application/json' } },
      }),
    }),

    // logout user
    logoutUser: builder.mutation({
      query: () => '/logout',
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(logoutUser(result.data));
      },
    }),
  }),
});

export const {
  useUserDetailsQuery,
  useLogoutUserMutation,
  useRegisterMutation,
} = authApi;
