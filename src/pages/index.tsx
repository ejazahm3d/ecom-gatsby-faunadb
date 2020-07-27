import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query allProducts {
    fauna {
      allProducts {
        data {
          _id
          price
          title
        }
      }
    }
  }
`

const IndexPage = ({ data }: any) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {data.fauna.allProducts.data.map((product: any) => (
        <li>
          {product.title} - {product.description}
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
