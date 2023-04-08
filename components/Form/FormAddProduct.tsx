import { Button, MultiSelect, Textarea, TextInput } from '@mantine/core';

const FormAddProduct = () => {
  return (
    <form className='flex flex-col gap-6'>
      <div className='md:flex items-center gap-4'>
        <div className='flex-1'>
          <TextInput
            classNames={{ label: 'text-gray600' }}
            label='PRODUCT NAME'
            withAsterisk
          />
        </div>
        <div className='flex-1'>
          <MultiSelect
            classNames={{ label: 'text-gray600' }}
            label='SELECT CATEGORIES'
            placeholder='Pick at least one category'
            data={[
              { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
              { value: 'morty', label: 'Morty', group: 'Never was a pickle' },
              { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
              { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
            ]}
          />
        </div>
      </div>

      <TextInput classNames={{ label: 'text-gray600' }} label='SLUG' />

      <div className='md:flex items-center gap-4'>
        <div className='flex-1'>
          <TextInput
            label={
              <p className='text-gray600'>
                PRICE <span className='text-red-500'>*</span>
                <span className='text-gray400 text-[13px]'> ( In USD )</span>
              </p>
            }
          />
        </div>
        <div className='flex-1'>
          <TextInput
            classNames={{ label: 'text-gray600' }}
            label='QUANTITY'
            withAsterisk
          />
        </div>
      </div>

      <Textarea
        classNames={{ label: 'text-gray600' }}
        label='DESCRIPTIONS'
        withAsterisk
      />

      <TextInput
        label={
          <p className='text-gray600'>
            PRODUCT TAGS
            <span className='text-gray400 text-[13px]'>
              {' '}
              ( Type and make comma to separate tags )
            </span>
          </p>
        }
      />

      <Button
        className='bg-purple300 hover:bg-hoverPurple400 w-fit'
        radius='xl'
        size='sm'
      >
        Submit
      </Button>
    </form>
  );
};

export default FormAddProduct;
