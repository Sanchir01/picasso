import { callsService } from '@/service/getAllCalls.service'
import { useQuery } from '@tanstack/react-query'

export const useGetAllCalls = (calls: number) => {
	const filterCalls = calls == 2 ? '' : `in_out=${calls}`
	const filters = filterCalls
	const { data, isFetching, isError } = useQuery(
		['allCalls', filterCalls],
		() => callsService.getAllCalls(filters),
		{
			select: ({ data }) => data
		}
	)

	return { data, isFetching, isError }
}
