import {
  User
} from '~/src/app/models/User/Model'

import createUser from '~/src/app/services/User/createUser'
import signinUser from '~/src/app/services/User/signinUser'
import updateUser from '~/src/app/services/User/updateUser'

const resolver = {
  Query: {
    getCurrentUser: async (_, params, ctx) => {
      return ctx.currentUser
    },

    getUsers: async () => {
      return await User.query().eager('stories')
    },
  },

  Mutation: {
    createUser: async (_, {
      data
    }) => {
      return await createUser({
        data
      })
    },

    signinUser: async (_, {
      data
    }) => {
      return await signinUser({
        data
      })
    },

    updateUser: async (_, {
      data
    }, ctx) => {
      return await updateUser({
        data,
        ctx
      })
    }
  }
}

export {
  resolver
}
