import { useEffect, useState } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import Search from '@/pages/search';

const SearchFilters = () => {
    const [filters, setFilters] = useState({})

    return (
        <>search filters</>
        
    )
}

export default SearchFilters;