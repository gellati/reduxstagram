import React from 'react'
import TestRenderer from 'react-test-renderer'
import expect from 'expect'
import { MemoryRouter } from 'react-router'

import Photo from '../../client/components/Photo'

// grab some data to use
import comments from '../../client/data/comments'
import posts from '../../client/data/posts'


describe('Photo Component', function () {
  let props
  
  before( () => {    
    props = {
      // post: posts[0],
      comments: comments[posts[0].code],
      i: 0,
      increment: expect.createSpy(),
      store: {
        getState: () => {
          return {
            posts,
            comments
          }
        },
        dispatch: () => {
          return {
          }
        },
        subscribe: () => {}        
      }
    }
  })

  it('should return a figure element', () => {
    const result = TestRenderer.create(
      <MemoryRouter>
        <Photo {...props} />
      </MemoryRouter>
    )
    expect(result.toJSON().type).toEqual('figure')
  })

  it('should have two children', () => {
    const result = TestRenderer.create(
      <MemoryRouter>
        <Photo {...props} />
      </MemoryRouter>
    )
    expect(result.toJSON().children.length).toEqual(2)
  })
})