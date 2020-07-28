import * as React from "react"
import { Box, Image, Badge } from "@chakra-ui/core"

import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"
import { string, number } from "prop-types"

const MotionBox = motion.custom(Box)

interface Props {
  data: {
    imageUrl: string
    imageAlt: string
    title: string
    formattedPrice: number
    reviewCount: number
    rating: number
  }
}

const Card: React.FC<Props> = props => {
  const property = props.data
  return (
    <MotionBox
      whileHover={{ scale: 1.1 }}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      shadow="lg"
      cursor="pointer"
    >
      <Image
        minHeight="18rem"
        objectFit="contain"
        src={property.imageUrl}
        alt={property.imageAlt}
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">
            New
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>{property.formattedPrice} $</Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Box
                as={FaStar}
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </MotionBox>
  )
}

export default Card
