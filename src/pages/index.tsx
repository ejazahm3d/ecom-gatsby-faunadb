import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { AllProductsQuery } from "../../graphql-types"

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
      <ul>
        {data.fauna.allProducts.data.map(product => (
          <li key={product._id}>
            Product {product.title} - Desc: {product.description} Price:{" "}
            {product.price}$
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
