import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import * as React from "react"
import { Flex, Box, Text } from "@chakra-ui/core"

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <Box as="header">
    <Flex bg="blue.500" p="2rem">
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
