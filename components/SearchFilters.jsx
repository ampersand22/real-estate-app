import { useEffect, useState } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button, filter } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import Search from '@/pages/search';

import { filterData, getFilterValues } from '../utils/filterData'

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData)
    const router = useRouter();
    // const [filterLocation, setFilterLocation] = useState([])

    // const fetchLocation = async (url) => {
    //     const { data } = await axios.get((url), {
    //         headers: {
    //             'X-RapidAPI-Key': '5f3bf030eamshe596dd158dcfda6p1bf24cjsnb6f1f8a4de37',
    //             'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    //         }
    //     });
    
    //     return data;
    // }

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues)

        values.forEach((item) => {
            query[item.name] = item.value
        })

        router.push({ pathname: path, query })
    }

    return (
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select
                    w="fit-content"
                    p="2"
                    placeholder={filter.placeholder}
                    onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
                    >
                    {filter?.items?.map((item) => (
                        <option value={item.value} key={item.value}>
                            {item.name}
                        </option>
                    ))}
                    </Select>
                </Box>
            ))}
        </Flex>
        
    )
}

export default SearchFilters;