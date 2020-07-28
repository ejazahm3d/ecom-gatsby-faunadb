import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AllProductsQuery } from "../../graphql-types"
import { Flex, Heading, Box } from "@chakra-ui/core"
import Card from "../components/card/Card"

export const query = graphql`
  query allProducts {
    fauna {
      allProducts {
        data {
          _id
          price
          title
          description
          image
          reviews {
            data {
              _id
              stars
              username
            }
          }
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
      <ToastContainer />

      <Flex
        p={{ xs: "2rem 1rem", sm: "3rem 2rem", lg: "3rem 5rem" }}
        align="center"
        flexDir="column"
        width="100%"
      >
        <Heading
          size="xl"
          textAlign="center"
          mt="1rem"
          color="gray.700"
          mb="2.5rem"
        >
          Products
        </Heading>

        <Flex
          wrap="wrap"
          flexDirection="row"
          justify="space-evenly"
          width="100%"
        >
          {data.fauna.allProducts.data.map(product => (
            <Box m="1rem" key={product._id}>
              <Card
                data={{
                  id: product._id,
                  title: product?.title,
                  imageUrl: product?.image[0],
                  formattedPrice: product?.price,
                  rating:
                    product?.reviews?.data
                      .map(product => product?.stars)
                      .reduce((acc, curr) => acc + curr, 0) /
                    product.reviews.data.length,
                  reviewCount: product?.reviews?.data.length,
                  imageAlt: "",
                }}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Layout>
  )
}

export default IndexPage
