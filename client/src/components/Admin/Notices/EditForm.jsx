import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { useUpdateNoticeMutation } from '../../../features/notice/noticeApi';

const EditForm = ({ notice }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [updateNotice, { isLoading, isError, isSuccess, error }] =
    useUpdateNoticeMutation();
  const {
    id,
    title: initTitle,
    description: initDescription,
    is_active: initActive,
  } = notice;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNotice({ id, data: { title, description, is_active } });
    console.log('up', title, description, is_active);
  };

  const [title, setTitle] = useState(initTitle);
  const [description, setDescription] = useState(initDescription);
  const [is_active, setIs_active] = useState(initActive);

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar('Notice updated successfully', { variant: 'success' });
      navigate('/admin/notices');
    }

    if (isError) {
      enqueueSnackbar(error?.data?.message, { variant: 'error' });
    }
  }, [isSuccess, isError, error, enqueueSnackbar, navigate]);

  return (
    <div>
      <main className='w-full mt-12 sm:pt-20 sm:mt-0'>
        {/* <!-- row --> */}
        <div className='flex sm:w-4/6 sm:mt-4 m-auto mb-7 rounded-lg  border-general bg-white border '>
          {/* <!-- login column --> */}
          <div className='flex-1 overflow-hidden'>
            {/* <!-- edit info container --> */}
            <div className='text-center py-10 px-4 sm:px-14'>
              <h1 className='text-3xl font-semibold text-gray-700 my-4 text-center'>
                Update Notice
              </h1>
              {/* <!-- input container --> */}
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col w-full gap-4'>
                  <TextField
                    id='outlined-basic'
                    label='Title'
                    variant='outlined'
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <TextField
                    id='outlined-basic'
                    label='Description'
                    variant='outlined'
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  {/* <!-- gender input --> */}
                  <div className='flex gap-4 items-center'>
                    <h2 className='text-md'>Notice Status :</h2>
                    <div className='flex items-center gap-6' id='radioInput'>
                      <RadioGroup
                        row
                        aria-labelledby='radio-buttons-group-label'
                        name='radio-buttons-group'
                        value={is_active?.toString()}
                      >
                        <FormControlLabel
                          name='gender'
                          value={true}
                          onChange={(e) => setIs_active(e.target.value)}
                          control={<Radio required />}
                          label='Active'
                        />
                        <FormControlLabel
                          name='gender'
                          value={false}
                          onChange={(e) => setIs_active(e.target.value)}
                          control={<Radio required />}
                          label='Inactive'
                        />
                      </RadioGroup>
                    </div>
                  </div>
                  {/* <!-- gender input --> */}

                  {/* <!-- button container --> */}
                  <div className='flex flex-col gap-2.5 mt-2 mb-16'>
                    <button
                      type='submit'
                      className='text-white py-3 w-full bg-orange-500 shadow hover:shadow-lg rounded-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed'
                      disabled={isLoading}
                    >
                      {isLoading ? <PulseLoader color={'#fff'} /> : 'Update'}
                    </button>
                  </div>
                  {/* <!-- button container --> */}
                </div>
              </form>
              {/* <!-- input container --> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditForm;
