import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchApi } from '../utils/fetchAPI';
import { getServerSideProps } from "../search";
import ImageScrollbar from "@/components/ImageScrollbar";

// we get to the property details by rendering it out in server side props
const PropertyDetails = ({ propertyDetails: {price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
    <Box maxWidth="1000px" margin="auto" p="4">
        {photos && <ImageScrollbar data={photos} />}
    </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id }}) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalIDs=${id}`);

    return {
        props: {
            propertyDetails: data
        }
    }
}