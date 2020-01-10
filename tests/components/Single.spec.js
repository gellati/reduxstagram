import React from 'react'
import TestRenderer from 'react-test-renderer'
import expect from 'expect'
import { MemoryRouter } from 'react-router'

import Single from '../../client/components/Single'
import comments from '../../client/data/comments'
import posts from '../../client/data/posts'

describe('Single Component', function () {
  let props
  before( () => {    
    props = {
      posts: [],
      match: {
        params: {
          postId: posts[0].id
        },
      },
      store: {
        getState: () => {
          return {
            posts: [],
            comments
          }          
        },        
        subscribe: () => {},
      }
    }
  })

  it('should render a div element', () => {
    const result = TestRenderer.create(
      <MemoryRouter>
        <Single {...props} />
      </MemoryRouter>
    )
    expect(result.toJSON().type).toEqual('div')
  })
  
  it('the rendered element should have the correct class name', () => {
    const result = TestRenderer.create(
      <MemoryRouter>
        <Single {...props} />
      </MemoryRouter>
    )
    expect(result.toJSON().props.className).toEqual('single-photo')
  })
  
  it('should have two child elements', () => {
    const result = TestRenderer.create(
      <MemoryRouter>
        <Single {...props} />
      </MemoryRouter>
    )
    // let [ photo, comments ] = result.toJSON().children
    expect(result.toJSON().children.length).toBe(2)
  })  
})