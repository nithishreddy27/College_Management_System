import { createUser, findUser } from '../../../lib/user'
import passport from 'passport'
import nextConnect from 'next-connect'
import { setLoginSession } from '../../../lib/auth'
import { localStrategy } from '../../../lib/password-local'



const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })(req, res)
  })

passport.use(localStrategy) 

export default nextConnect()
  .use(passport.initialize())
  .post(async (req, res) => {
    try {

      const dt = await findUser({"username":req.body.username})
      if(dt){
        throw new Error("User already exist")
      }
      else{

        await createUser(req.body)
        const user = await authenticate('local', req, res)
        const session = { ...user }
        await setLoginSession(res, session)
        res.status(200).send({ done: true })
      }
    } catch (error) {
      console.error(error)
      res.status(401).send(error.message)
    }
  })
