import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_ITEMS_QUERY = gql`
  query getItems {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`

const Items = () => {
  const { data } = useQuery(GET_ITEMS_QUERY)
  console.log(data)
  return (
    <div>
      <p>Items</p>
    </div>
  )
}

export default Items
