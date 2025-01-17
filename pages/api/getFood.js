import { verifyIdToken } from '../../utils/auth/firebaseAdmin'
const favoriteFoods = ['pizza', 'burger', 'chips', 'tortilla']

const getFood = async (req, res) => {
  const token = req.headers.token
  console.log("token",token)
  try {
    await verifyIdToken(token)
    // console.log("res",res)
    return res.status(200).json({
      food: favoriteFoods[Math.floor(Math.random() * favoriteFoods.length)],
    })
  } catch (error) {
    return res.status(401).send('You are unauthorised')
  }
}

export default getFood
