// // import { getDataById } from "../DAL/usersDAL.js"
// // import { getUserByUsername } from "../DAL/messagesDAL.js"

// async function validateFieldsInBody(req, res, next) {
//     try {
//         if (req.body.username && req.body.password) {
//             next()
//         }
//         else res.sendStatus(409)
//     } catch (error) {
//         res.status(500).json({ error })
//     }
// }



// // async function validateUsersMessage(req, res, next) {
// //     try {
// //         const message = await getDataById(req.params.id)
// //         console.log(message);

// //         const user = await getUserByUsername(req.body.username)
// //         console.log(user);
// //         if (message.userId === user.id) {
// //             next()
// //         }
// //         else res.json("This is not your message.")
// //     } catch (error) {
// //         res.status(500).json({ error })
// //     }
// // }

// export {
//     validateFieldsInBody,
//     validateUsersMessage
// }


