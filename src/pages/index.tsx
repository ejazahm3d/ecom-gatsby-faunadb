import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { AllProductsQuery } from "../../graphql-types"
import { Flex } from "@chakra-ui/core"

export const query = graphql`
  query allProducts {
    fauna {
      allProducts {
        data {
          _id
          price
          title
          description
        }
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery<AllProductsQuery>(query)
  return (
    <Layout>
      <SEO title="Home" />
      <Flex>
        <ul>
          {data.fauna.allProducts.data.map(product => (
            <li key={product._id}>
              Product {product.title} - Desc: {product.description} Price:{" "}
              {product.price}$
            </li>
          ))}
        </ul>
      </Flex>
    </Layout>
  )
}

export default IndexPage
