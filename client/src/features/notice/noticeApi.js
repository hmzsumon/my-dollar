import { apiSlice } from '../api/apiSlice';

export const noticeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotices: builder.query({
      query: () => '/notices',
      providesTags: ['Notice'],
    }),

    // createNotice new notice
    createNotice: builder.mutation({
      query: (body) => ({
        url: '/notice',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Notice'],
    }),

    // get active notice
    getActiveNotice: builder.query({
      query: () => '/active/notice',
      providesTags: ['Notice'],
    }),

    // get notice by id
    getNoticeById: builder.query({
      query: (id) => `/notice/${id}`,
    }),

    // update notice
    updateNotice: builder.mutation({
      query: ({ id, data }) => ({
        url: `/notice/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Notice'],
    }),
  }),
});

export const {
  useGetNoticesQuery,
  useGetActiveNoticeQuery,
  useGetNoticeByIdQuery,
  useUpdateNoticeMutation,
  useCreateNoticeMutation,
} = noticeApi;
