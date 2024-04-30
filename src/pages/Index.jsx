import { Box, Flex, Heading, Text, SimpleGrid, Image, Button } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

const categories = [
  {
    name: 'Bridal Gowns',
    image: '/images/bridal-gowns.jpg',
    description: 'Explore our exclusive collection of bridal gowns that blend sophistication with enchantment.'
  },
  {
    name: 'Bridesmaid Dresses',
    image: '/images/bridesmaid-dresses.jpg',
    description: 'Find the perfect dresses for your bridal party that complement your wedding theme.'
  },
  {
    name: 'Accessories',
    image: '/images/accessories.jpg',
    description: 'Complete your look with our range of elegant accessories, from veils to jewelry.'
  }
];

const CategoryCard = ({ category }) => (
  <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={category.image} alt={`${category.name} image`} />
    <Box p="6">
      <Box d="flex" alignItems="baseline">
        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
          {category.name}
        </Box>
      </Box>
      <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {category.description}
      </Text>
      <Button mt="3" colorScheme="pink" size="sm">Shop Now</Button>
    </Box>
  </Box>
);

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Welcome to Eternal Vows <FaHeart />
      </Heading>
      <Text fontSize="lg" mb={6}>Discover our exclusive wedding attire collections.</Text>
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
        {categories.map(category => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Index;