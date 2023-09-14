import { FC } from 'react'
import { Button } from '../ui/button'

const Price: FC = () => {
	return (
		<>
			<Button variant='outline' className='flex gap-2 bg-white rounded-2xl'>
				<p className='text-gray'>Баланс:</p>
				<p className='hover:text-btn_bg'>272 P</p>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
				>
					<path
						d='M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM18 13.2H13.2V18H10.8V13.2H6V10.8H10.8V6H13.2V10.8H18V13.2Z'
						fill='#005FF8'
					/>
				</svg>
			</Button>
		</>
	)
}

export default Price