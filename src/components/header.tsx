import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import * as React from "react"
import { Flex, Box, Text, Badge } from "@chakra-ui/core"
import { FaShoppingBasket } from "react-icons/fa"

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <Box as="header">
    <Flex bg="blue.500" p="1rem 2rem" justify="space-between" align="center">
      <Text fontSize="xl">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Text>
      <Flex>
        <Box
          d="flex"
          alignItems="center"
          color="white"
          cursor="pointer"
          className="snipcart-checkout"
        >
          <FaShoppingBasket size="1.8rem" />
          <Badge ml="0.3rem" as="span" className="snipcart-items-count"></Badge>
        </Box>
      </Flex>
    </Flex>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
